// ==================== 按钮事件监听 ====================
document.getElementById('btnCountry').addEventListener('click', function () {
    state.showCountry = !state.showCountry;
    this.classList.toggle('active', state.showCountry);
    updateDisplay();
});

document.getElementById('btnLabel').addEventListener('click', function () {
    state.showLabel = !state.showLabel;
    this.classList.toggle('active', state.showLabel);
    updateDisplay();
});

document.getElementById('btnRelation').addEventListener('click', function () {
    state.showRelation = !state.showRelation;
    this.classList.toggle('active', state.showRelation);
    updateDisplay();
});

document.getElementById('btnResource').addEventListener('click', function () {
    state.showResource = !state.showResource;
    this.classList.toggle('active', state.showResource);
    updateDisplay();
});

document.getElementById('btnMilitary').addEventListener('click', function () {
    state.showMilitary = !state.showMilitary;
    this.classList.toggle('active', state.showMilitary);
    updateDisplay();
});

document.getElementById('btnOilExport').addEventListener('click', function () {
    state.showOilExport = !state.showOilExport;
    this.classList.toggle('active', state.showOilExport);
    updateDisplay();
});

// ==================== 图例 ====================
const legend = document.getElementById('legend');
const religionLegend = `
    <div class="legend-section">
        <h4>宗教派系</h4>
        <div class="legend-item"><div class="legend-color" style="background:#C4A35A"></div><span>逊尼派</span></div>
        <div class="legend-item"><div class="legend-color" style="background:#2E8B57"></div><span>什叶派</span></div>
        <div class="legend-item"><div class="legend-color" style="background:#4169E1"></div><span>犹太教</span></div>
    </div>
`;
const resourceLegend = `
    <div class="legend-section">
        <h4>资源与港口</h4>
        <div class="legend-item"><div class="legend-color" style="background:rgba(139,69,19,0.9)"></div><span>⛽ 油田</span></div>
        <div class="legend-item"><div class="legend-color" style="background:rgba(255,140,0,0.9)"></div><span>⛽ 气田</span></div>
        <div class="legend-item"><div class="legend-color" style="background:rgba(30,144,255,0.9)"></div><span>💧 河流</span></div>
        <div class="legend-item"><div class="legend-color" style="background:rgba(34,139,34,0.9)"></div><span>🚢 港口</span></div>
        <div class="legend-item"><div class="legend-color" style="background:rgba(220,20,60,0.9)"></div><span>🏛️ 战略要地</span></div>
    </div>
`;
const militaryLegend = `
    <div class="legend-section">
        <h4>军事基地</h4>
        <div class="legend-item"><div class="legend-color" style="background:rgba(0,0,139,0.9)"></div><span>✈️🎖️⚓ 美军</span></div>
        <div class="legend-item"><div class="legend-color" style="background:rgba(139,0,0,0.9)"></div><span>✈️⚓ 俄军</span></div>
        <div class="legend-item"><div class="legend-color" style="background:rgba(128,0,128,0.9)"></div><span>🏔️ 战略要地</span></div>
    </div>
`;
const oilExportLegend = `
    <div class="legend-section">
        <h4>石油输出</h4>
        <div class="legend-item"><div class="legend-color" style="background:#FFD700"></div><span>🛢️ 石油输出线</span></div>
    </div>
`;
let countryLegend = '<div class="legend-section"><h4>国家</h4>';
for (const [, info] of Object.entries(countryData)) {
    countryLegend += `<div class="legend-item"><span class="flag">${info.flag}</span><span>${info.name}</span></div>`;
}
countryLegend += '</div>';
legend.innerHTML = religionLegend + resourceLegend + militaryLegend + oilExportLegend + countryLegend;

// ==================== 初始化 ====================
updateDisplay();

loadBoundaryData().then(() => {
    if (countriesLayer) {
        map.removeLayer(countriesLayer);
        countriesLayer = createCountriesLayer();
        map.addLayer(countriesLayer);
    }
});
