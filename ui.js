// ==================== 更新国家信息面板 ====================
function updateCountryInfoPanel(countryName) {
    const panel = document.getElementById('countryInfoPanel');
    const panelFlag = document.getElementById('panelFlag');
    const panelTitle = document.getElementById('panelTitle');
    const panelHistorical = document.getElementById('panelHistorical');
    const panelGrid = document.getElementById('panelGrid');
    const panelRelations = document.getElementById('panelRelations');

    const key = getCountryKey(countryName);
    if (!key) {
        panel.style.display = 'none';
        return;
    }

    const info = countryData[key];
    const details = countryDetails[key];

    if (!info || !details) {
        panel.style.display = 'none';
        return;
    }

    panelFlag.textContent = info.flag;
    panelTitle.textContent = info.name;
    panelHistorical.textContent = details.historicalName ? `历史: ${details.historicalName}` : '';

    panelGrid.innerHTML = `
        <div class="panel-item">
            <span class="panel-label">政权</span>
            <span class="panel-value">${details.regime}</span>
        </div>
        <div class="panel-item">
            <span class="panel-label">政体</span>
            <span class="panel-value">${details.regimeType}</span>
        </div>
        <div class="panel-item">
            <span class="panel-label">领袖</span>
            <span class="panel-value">${details.leader}</span>
        </div>
        <div class="panel-item">
            <span class="panel-label">意识形态</span>
            <span class="panel-value">${details.ideology}</span>
        </div>
        <div class="panel-item">
            <span class="panel-label">民族</span>
            <span class="panel-value">${details.ethnicity}</span>
        </div>
        <div class="panel-item">
            <span class="panel-label">宗教</span>
            <span class="panel-value">${details.religion}</span>
        </div>
        <div class="panel-item">
            <span class="panel-label">人口</span>
            <span class="panel-value">${details.population}</span>
        </div>
        <div class="panel-item">
            <span class="panel-label">经济</span>
            <span class="panel-value">${details.economy}</span>
        </div>
    `;

    panelRelations.innerHTML = `
        <div class="relation-row">
            <div class="relation-label allies">🟢 盟友</div>
            <div class="relation-value allies-value">${formatCountriesWithFlags(details.allies)}</div>
        </div>
        <div class="relation-row">
            <div class="relation-label enemies">🔴 敌对</div>
            <div class="relation-value enemies-value">${formatCountriesWithFlags(details.enemies)}</div>
        </div>
        <div class="relation-row">
            <div class="relation-label" style="color: #FFD700;">🛢️ 石油输出</div>
            <div class="relation-value" style="color: #FFD700; font-weight: 600;">${details.oilExport || '-'}</div>
        </div>
    `;

    panel.style.display = 'block';

    renderFactionChart(key);
}

// ==================== 渲染势力派系图表 ====================
function renderFactionChart(countryKey) {
    const factions = countryFactions[countryKey];
    if (!factions) return;

    const chartDom = document.getElementById('factionChart');
    if (!chartDom) return;

    let chartInstance = echarts.getInstanceByDom(chartDom);
    if (chartInstance) {
        chartInstance.dispose();
    }
    chartInstance = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(22, 33, 62, 0.95)',
            borderColor: '#0f3460',
            textStyle: { color: '#e8e8e8', fontSize: 11 },
            formatter: function (params) {
                return `${params.marker}${params.name}: ${params.value}%`;
            }
        },
        series: [
            {
                name: '民族',
                type: 'pie',
                radius: ['0%', '25%'],
                center: ['50%', '50%'],
                itemStyle: { borderRadius: 4, borderColor: '#1a1a2e', borderWidth: 2 },
                label: { show: false },
                data: factions.ethnicGroups.map(f => ({ value: f.population, name: f.name, itemStyle: { color: f.color } }))
            },
            {
                name: '宗教',
                type: 'pie',
                radius: ['30%', '50%'],
                center: ['50%', '50%'],
                itemStyle: { borderRadius: 4, borderColor: '#1a1a2e', borderWidth: 2 },
                label: { show: true, position: 'outside', color: '#e8e8e8', fontSize: 10, formatter: '{b}:{d}%', overflow: 'truncate', maxWidth: 80 },
                labelLine: { show: true, lineStyle: { color: 'rgba(255,255,255,0.3)' } },
                data: factions.religions.map(f => ({ value: f.influence, name: f.name, itemStyle: { color: f.color } }))
            },
            {
                name: '势力',
                type: 'pie',
                radius: ['55%', '80%'],
                center: ['50%', '50%'],
                itemStyle: { borderRadius: 4, borderColor: '#1a1a2e', borderWidth: 2 },
                label: { show: true, position: 'outside', color: '#e8e8e8', fontSize: 10, formatter: '{b}:{d}%', overflow: 'truncate', maxWidth: 80 },
                labelLine: { show: true, lineStyle: { color: 'rgba(255,255,255,0.3)' } },
                data: factions.politicalPower.map(f => ({ value: f.power, name: f.name, itemStyle: { color: f.color } }))
            }
        ],
        title: [
            { text: '民族', left: '50%', top: '10%', textAlign: 'center', textStyle: { color: '#e8e8e8', fontSize: 11 } },
            { text: '宗教', left: '50%', top: '40%', textAlign: 'center', textStyle: { color: '#e8e8e8', fontSize: 11 } },
            { text: '势力', left: '50%', top: '70%', textAlign: 'center', textStyle: { color: '#e8e8e8', fontSize: 11 } }
        ]
    };

    chartInstance.setOption(option);
}

function hideCountryInfoPanel() {
    const panel = document.getElementById('countryInfoPanel');
    panel.style.display = 'none';

    const chartDom = document.getElementById('factionChart');
    if (chartDom) {
        const chartInstance = echarts.getInstanceByDom(chartDom);
        if (chartInstance) {
            chartInstance.dispose();
        }
    }
}

// ==================== 绘制关系线 ====================
function drawRelationshipLines(countryName) {
    if (relationshipLinesLayer) {
        map.removeLayer(relationshipLinesLayer);
    }
    relationshipLinesLayer = L.layerGroup();

    const details = countryDetails[countryName];
    if (!details) return;

    const center = countryCenters[countryName];
    if (!center) return;

    const parseCountries = (str) => {
        if (!str) return [];
        return str.split(/[、,，]/).map(s => s.trim()).filter(s => s);
    };

    const allies = parseCountries(details.allies);
    const enemies = parseCountries(details.enemies);

    allies.forEach(allyName => {
        const key = nameToKey[allyName] || allyName;
        const allyCenter = countryCenters[key];
        if (allyCenter) {
            const arcPoints = getArcPoints(center, allyCenter, 50, 1.0);
            const polyline = L.polyline(arcPoints, {
                color: '#22c55e',
                weight: 1.5,
                opacity: 0.8
            });
            relationshipLinesLayer.addLayer(polyline);

            const startMarker = L.circleMarker([center[0], center[1]], {
                radius: 5,
                fillColor: '#22c55e',
                fillOpacity: 0.9,
                color: '#fff',
                weight: 1.5,
                className: 'arc-start-marker'
            });
            relationshipLinesLayer.addLayer(startMarker);

            const isNonState = ['黎巴嫩真主党', '伊拉克民兵', '也门胡塞', '胡塞武装', '真主党', '哈马斯', '巴勒斯坦哈马斯', '伊斯兰国', '基地组织', '库尔德武装', '伊斯兰国呼罗珊分支'].includes(key);
            if (isNonState) {
                const diamondIcon = L.divIcon({
                    className: 'ally-diamond',
                    html: `<div style="width:10px;height:10px;background:#22c55e;transform:rotate(45deg);border:1px solid #fff;"></div>`,
                    iconSize: [12, 12],
                    iconAnchor: [6, 6]
                });
                const endMarker = L.marker([allyCenter[0], allyCenter[1]], { icon: diamondIcon });
                relationshipLinesLayer.addLayer(endMarker);
            } else {
                const endMarker = L.circleMarker([allyCenter[0], allyCenter[1]], {
                    radius: 5,
                    fillColor: '#22c55e',
                    fillOpacity: 0.9,
                    color: '#fff',
                    weight: 1.5,
                    className: 'arc-end-marker'
                });
                relationshipLinesLayer.addLayer(endMarker);
            }
        }
    });

    enemies.forEach(enemyName => {
        const key = nameToKey[enemyName] || enemyName;
        const enemyCenter = countryCenters[key];
        if (enemyCenter) {
            const arcPoints = getArcPoints(center, enemyCenter, 50, 1.0);
            const polyline = L.polyline(arcPoints, {
                color: '#ef4444',
                weight: 1.5,
                opacity: 0.8
            });
            relationshipLinesLayer.addLayer(polyline);

            const startMarker = L.circleMarker([center[0], center[1]], {
                radius: 5,
                fillColor: '#ef4444',
                fillOpacity: 0.9,
                color: '#fff',
                weight: 1.5,
                className: 'arc-start-marker'
            });
            relationshipLinesLayer.addLayer(startMarker);

            const isNonState = ['黎巴嫩真主党', '伊拉克民兵', '也门胡塞', '胡塞武装', '真主党', '哈马斯', '巴勒斯坦哈马斯', '伊斯兰国', '基地组织', '库尔德武装', '伊斯兰国呼罗珊分支'].includes(key);
            if (isNonState) {
                const diamondIcon = L.divIcon({
                    className: 'enemy-diamond',
                    html: `<div style="width:10px;height:10px;background:#ef4444;transform:rotate(45deg);border:1px solid #fff;"></div>`,
                    iconSize: [12, 12],
                    iconAnchor: [6, 6]
                });
                const endMarker = L.marker([enemyCenter[0], enemyCenter[1]], { icon: diamondIcon });
                relationshipLinesLayer.addLayer(endMarker);
            } else {
                const endMarker = L.circleMarker([enemyCenter[0], enemyCenter[1]], {
                    radius: 5,
                    fillColor: '#ef4444',
                    fillOpacity: 0.9,
                    color: '#fff',
                    weight: 1.5,
                    className: 'arc-end-marker'
                });
                relationshipLinesLayer.addLayer(endMarker);
            }
        }
    });

    relationshipLinesLayer.addTo(map);
}

function clearRelationshipLines() {
    if (relationshipLinesLayer) {
        map.removeLayer(relationshipLinesLayer);
        relationshipLinesLayer = null;
    }
}

// ==================== 绘制石油输出线 ====================
function drawSingleCountryOilExport(countryKey) {
    if (oilExportLayer) {
        map.removeLayer(oilExportLayer);
    }
    oilExportLayer = L.layerGroup();

    const details = countryDetails[countryKey];
    if (!details || !details.oilExport) {
        oilExportLayer.addTo(map);
        return;
    }

    const center = countryCenters[countryKey];
    if (!center) {
        oilExportLayer.addTo(map);
        return;
    }

    const parseCountries = (str) => {
        if (!str) return [];
        return str.split(/[、,，]/).map(s => s.trim()).filter(s => s);
    };

    const oilExports = parseCountries(details.oilExport);
    oilExports.forEach(exportName => {
        const key = nameToKey[exportName] || exportName;
        const exportCenter = countryCenters[key];
        if (exportCenter) {
            const arcPoints = getArcPoints(center, exportCenter, 50, 1.0);
            const polyline = L.polyline(arcPoints, {
                color: '#FFD700',
                weight: 1.5,
                opacity: 0.9,
                dashArray: '10, 5'
            });
            oilExportLayer.addLayer(polyline);

            const startMarker = L.circleMarker([center[0], center[1]], {
                radius: 5,
                fillColor: '#FFD700',
                fillOpacity: 1,
                color: '#000',
                weight: 2,
                className: 'arc-start-marker'
            });
            oilExportLayer.addLayer(startMarker);

            const arrowIcon = L.divIcon({
                className: 'oil-arrow',
                html: `<div style="width:0;height:0;border-left:8px solid #FFD700;border-top:5px solid transparent;border-bottom:5px solid transparent;filter:drop-shadow(1px 1px 1px rgba(0,0,0,0.5));"></div>`,
                iconSize: [16, 10],
                iconAnchor: [0, 5]
            });
            const arrowMarker = L.marker([exportCenter[0], exportCenter[1]], {
                icon: arrowIcon
            });
            oilExportLayer.addLayer(arrowMarker);
        }
    });

    oilExportLayer.addTo(map);
}

function clearOilExportLines() {
    if (oilExportLayer) {
        map.removeLayer(oilExportLayer);
        oilExportLayer = null;
    }
}
