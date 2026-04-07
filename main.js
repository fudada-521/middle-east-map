// ==================== 地图初始化 ====================
const map = L.map('map', {
    center: [29, 47],
    zoom: 5,
    minZoom: 4,
    maxZoom: 10
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// ==================== 状态管理 ====================
let countriesLayer, countryLabelsLayer;
let relationshipLinesLayer = null;
let preciseCountriesGeoJSON = null;

let resourcesLayer = null;
let militaryLayer = null;
let oilExportLayer = null;

let state = {
    showCountry: true,
    showLabel: true,
    showRelation: false,
    showResource: false,
    showMilitary: false,
    showOilExport: false
};

// ==================== 生成大地线点（Great Circle弧线） ====================
function getArcPoints(start, end, segments = 80, arcFactor = 1.0) {
    const toRad = (deg) => deg * Math.PI / 180;
    const toDeg = (rad) => rad * 180 / Math.PI;

    const lat1 = toRad(start[0]);
    const lon1 = toRad(start[1]);
    const lat2 = toRad(end[0]);
    const lon2 = toRad(end[1]);

    const d = 2 * Math.asin(Math.sqrt(
        Math.pow(Math.sin((lat2 - lat1) / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon2 - lon1) / 2), 2)
    ));

    if (d < 0.01) {
        return [start, end];
    }

    const points = [];
    for (let i = 0; i <= segments; i++) {
        const f = (i / segments) * arcFactor;
        const fClamped = Math.min(f, 1);

        const A = Math.sin((1 - fClamped) * d) / Math.sin(d);
        const B = Math.sin(fClamped * d) / Math.sin(d);

        const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
        const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
        const z = A * Math.sin(lat1) + B * Math.sin(lat2);

        const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
        const lon = Math.atan2(y, x);

        points.push([toDeg(lat), toDeg(lon)]);
    }

    if (arcFactor > 1 && arcFactor !== 1.0) {
        points.push(end);
    }

    return points;
}

// ==================== 创建资源标注图层 ====================
function createResourcesLayer() {
    const layer = L.layerGroup();

    resourcesData.oilFields.forEach(field => {
        const iconHtml = `<div class="resource-marker ${field.type}" style="width:24px;height:24px;">⛽</div>`;
        const marker = L.marker(field.coords, {
            icon: L.divIcon({
                className: 'resource-icon',
                html: iconHtml,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            })
        });

        const popupContent = `
            <div class="marker-popup">
                <h4>${field.name}</h4>
                <p><span class="type-badge type-${field.type}">${field.type === 'oil' ? '油田' : '气田'}</span></p>
                <p><strong>所属:</strong> ${field.country}</p>
                <p><strong>储量:</strong> ${field.reserves}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        layer.addLayer(marker);
    });

    resourcesData.waterResources.forEach(water => {
        const iconHtml = `<div class="resource-marker river" style="width:20px;height:20px;">💧</div>`;
        const marker = L.marker(water.coords, {
            icon: L.divIcon({
                className: 'resource-icon',
                html: iconHtml,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            })
        });

        const popupContent = `
            <div class="marker-popup">
                <h4>${water.name}</h4>
                <p><span class="type-badge" style="background:rgba(30,144,255,0.8);">河流</span></p>
                <p><strong>流经:</strong> ${water.country}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        layer.addLayer(marker);
    });

    resourcesData.ports.forEach(port => {
        const iconMap = {
            'strategic': '🏛️',
            'commercial': '🚢',
            'oil': '🛢️',
            'military': '⚓'
        };
        const icon = iconMap[port.type] || '🚢';
        const colorClass = port.type === 'strategic' ? 'strategic' : 'port';
        const iconHtml = `<div class="resource-marker ${colorClass}" style="width:22px;height:22px;">${icon}</div>`;
        const marker = L.marker(port.coords, {
            icon: L.divIcon({
                className: 'resource-icon',
                html: iconHtml,
                iconSize: [22, 22],
                iconAnchor: [11, 11]
            })
        });

        const popupContent = `
            <div class="marker-popup">
                <h4>${port.name}</h4>
                <p><span class="type-badge type-${port.type === 'strategic' ? 'shipping' : port.type}">${port.type === 'strategic' ? '战略' : port.type === 'commercial' ? '商业' : port.type === 'oil' ? '石油' : '军事'}</span></p>
                <p><strong>所属:</strong> ${port.country}</p>
                <p><strong>意义:</strong> ${port.significance || ''}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        layer.addLayer(marker);
    });

    return layer;
}

// ==================== 创建军事基地图层 ====================
function createMilitaryLayer() {
    const layer = L.layerGroup();

    militaryBasesData.usBases.forEach(base => {
        const iconMap = { 'air': '✈️', 'naval': '⚓', 'army': '🎖️' };
        const icon = iconMap[base.type] || '🎖️';
        const iconHtml = `<div class="military-marker us" style="width:26px;height:26px;">${icon}</div>`;
        const marker = L.marker(base.coords, {
            icon: L.divIcon({
                className: 'military-icon',
                html: iconHtml,
                iconSize: [26, 26],
                iconAnchor: [13, 13]
            })
        });

        const popupContent = `
            <div class="marker-popup">
                <h4>${base.name}</h4>
                <p><span class="type-badge type-us">美军基地</span>${base.type === 'air' ? '空军' : base.type === 'naval' ? '海军' : '陆军'}</p>
                <p><strong>所在国:</strong> ${base.country}</p>
                <p><strong>人员:</strong> ${base.personnel}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        layer.addLayer(marker);
    });

    militaryBasesData.russianBases.forEach(base => {
        const iconMap = { 'air': '✈️', 'naval': '⚓' };
        const icon = iconMap[base.type] || '🎖️';
        const iconHtml = `<div class="military-marker russian" style="width:26px;height:26px;">${icon}</div>`;
        const marker = L.marker(base.coords, {
            icon: L.divIcon({
                className: 'military-icon',
                html: iconHtml,
                iconSize: [26, 26],
                iconAnchor: [13, 13]
            })
        });

        const popupContent = `
            <div class="marker-popup">
                <h4>${base.name}</h4>
                <p><span class="type-badge type-russian">俄军基地</span>${base.type === 'air' ? '空军' : '海军'}</p>
                <p><strong>所在国:</strong> ${base.country}</p>
                <p><strong>人员:</strong> ${base.personnel}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        layer.addLayer(marker);
    });

    militaryBasesData.strategicLocations.forEach(loc => {
        const iconMap = { 'ground': '🏔️', 'naval': '⚓', 'air': '✈️' };
        const icon = iconMap[loc.type] || '📍';
        const iconHtml = `<div class="military-marker strategic" style="width:24px;height:24px;">${icon}</div>`;
        const marker = L.marker(loc.coords, {
            icon: L.divIcon({
                className: 'military-icon',
                html: iconHtml,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            })
        });

        const popupContent = `
            <div class="marker-popup">
                <h4>${loc.name}</h4>
                <p><span class="type-badge" style="background:rgba(128,0,128,0.8);">战略要地</span>${loc.type === 'ground' ? '地面' : loc.type === 'naval' ? '海军' : '空军'}</p>
                <p><strong>所在国:</strong> ${loc.country}</p>
                <p><strong>控制方:</strong> ${loc.control}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
        layer.addLayer(marker);
    });

    return layer;
}

// ==================== 创建 Tooltip 内容 ====================
function createCountryTooltip(countryName, countryInfo) {
    const details = countryDetails[countryName];
    if (!details) {
        return `<div class="tooltip-title"><span class="flag">${countryInfo.flag}</span>${countryInfo.name}</div>`;
    }
    return `
        <div class="tooltip-title"><span class="flag">${countryInfo.flag}</span>${countryInfo.name}</div>
        <div class="tooltip-row"><span class="tooltip-label">政权:</span><span class="tooltip-value">${details.regime}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">类型:</span><span class="tooltip-value">${details.regimeType}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">领袖:</span><span class="tooltip-value">${details.leader}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">意识形态:</span><span class="tooltip-value">${details.ideology}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">民族:</span><span class="tooltip-value">${details.ethnicity}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">宗教:</span><span class="tooltip-value">${details.religion}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">人口:</span><span class="tooltip-value">${details.population}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">经济:</span><span class="tooltip-value">${details.economy}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">盟友:</span><span class="tooltip-value">${details.allies || '-'}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">敌对:</span><span class="tooltip-value">${details.enemies || '-'}</span></div>
        <div class="tooltip-row"><span class="tooltip-label">石油输出:</span><span class="tooltip-value" style="color:#000;font-weight:600;">🛢️${details.oilExport || '-'}</span></div>
    `;
}

// ==================== 创建国家图层 ====================
function createCountriesLayer() {
    const geoJSONData = preciseCountriesGeoJSON || countriesGeoJSON;
    return L.geoJSON(geoJSONData, {
        style: (feature) => {
            const key = getCountryKey(feature.properties.name);
            const details = key ? countryDetails[key] : null;

            let fillColor = '#888';
            if (details) {
                const religion = details.religion || '';
                if (religion.includes('逊尼派') && !religion.includes('什叶派')) {
                    const colors = ['#C4A35A', '#B8956E', '#A68B5B', '#D4B896', '#C9A86C'];
                    fillColor = colors[key.charCodeAt(0) % colors.length];
                }
                else if (religion.includes('什叶派')) {
                    const colors = ['#2E8B57', '#3CB371', '#228B22', '#2E8B57', '#32CD32'];
                    fillColor = colors[key.charCodeAt(0) % colors.length];
                }
                else if (religion.includes('犹太教')) {
                    const colors = ['#4169E1', '#1E90FF', '#6495ED', '#4169E1', '#5070D0'];
                    fillColor = colors[key.charCodeAt(0) % colors.length];
                }
                else if (religion.includes('佛教')) {
                    const colors = ['#FF8C00', '#FFA500', '#FFB347', '#FF7F50', '#E65C00'];
                    fillColor = colors[key.charCodeAt(0) % colors.length];
                }
                else {
                    const colors = ['#808080', '#6B6B6B', '#787878', '#909090', '#696969'];
                    fillColor = colors[key.charCodeAt(0) % colors.length];
                }
            }

            return {
                fillColor: fillColor,
                weight: 2, opacity: 1, color: 'white', fillOpacity: 0.6
            };
        },
        onEachFeature: (feature, layer) => {
            const key = getCountryKey(feature.properties.name);
            if (!key) return;
            layer.on({
                click: (e) => {
                    countriesLayer.eachLayer((l) => {
                        countriesLayer.resetStyle(l);
                    });
                    e.target.setStyle({ weight: 3, color: '#666', fillOpacity: 0.8 });
                    e.target.bringToFront();
                    updateCountryInfoPanel(key);
                    if (state.showRelation) {
                        drawRelationshipLines(key);
                    }
                    if (state.showOilExport) {
                        drawSingleCountryOilExport(key);
                    }
                }
            });
        }
    });
}

function createCountryLabels() {
    const group = L.layerGroup();
    for (const [key, coords] of Object.entries(countryCenters)) {
        const info = countryData[key];
        if (info) {
            L.marker(coords, {
                icon: L.divIcon({
                    className: 'country-label-wrapper',
                    html: `<div class="country-label">${info.flag} ${info.name}</div>`,
                    iconSize: [70, 20],
                    iconAnchor: [35, 10]
                })
            }).addTo(group);
        }
    }
    return group;
}

// ==================== 模式切换 ====================
function updateDisplay() {
    if (countriesLayer) map.removeLayer(countriesLayer);
    if (countryLabelsLayer) map.removeLayer(countryLabelsLayer);
    if (relationshipLinesLayer) map.removeLayer(relationshipLinesLayer);
    if (resourcesLayer) map.removeLayer(resourcesLayer);
    if (militaryLayer) map.removeLayer(militaryLayer);
    if (oilExportLayer) map.removeLayer(oilExportLayer);

    if (!countriesLayer) countriesLayer = createCountriesLayer();
    if (!countryLabelsLayer) countryLabelsLayer = createCountryLabels();
    if (!resourcesLayer) resourcesLayer = createResourcesLayer();
    if (!militaryLayer) militaryLayer = createMilitaryLayer();

    if (state.showCountry) map.addLayer(countriesLayer);
    if (state.showLabel) map.addLayer(countryLabelsLayer);
    if (state.showRelation && relationshipLinesLayer) map.addLayer(relationshipLinesLayer);
    if (state.showResource) map.addLayer(resourcesLayer);
    if (state.showMilitary) map.addLayer(militaryLayer);
    if (state.showOilExport) {
        map.addLayer(oilExportLayer);
    }
}

// ==================== 加载精确边界数据 ====================
async function loadBoundaryData() {
    try {
        const countriesResponse = await fetch('./me-countries.geojson');
        preciseCountriesGeoJSON = await countriesResponse.json();
        console.log('精确国家边界数据已加载:', preciseCountriesGeoJSON.features.length, '个国家');
    } catch (error) {
        console.error('加载国家边界数据失败:', error);
    }
}
