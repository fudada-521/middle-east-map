// ==================== 精确国界 GeoJSON ====================
const countriesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Saudi Arabia", "nameCN": "沙特阿拉伯" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[55, 22], [57, 22], [58, 20], [56, 18], [52, 17], [48, 16], [46, 15], [45, 18], [42, 22], [40, 25], [38, 28], [36, 31], [38, 32], [42, 31], [45, 30], [48, 28], [50, 27], [52, 27], [55, 25], [57, 24], [60, 22], [62, 21], [58, 19], [55, 19], [55, 22]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Iran", "nameCN": "伊朗" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[44, 39], [48, 40], [52, 38], [55, 36], [56, 34], [58, 32], [60, 30], [62, 28], [61, 25], [60, 22], [57, 22], [55, 25], [52, 27], [50, 27], [48, 28], [45, 30], [44, 32], [44, 35], [42, 37], [44, 39]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Iraq", "nameCN": "伊拉克" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[38, 37], [42, 37], [45, 36], [46, 35], [48, 35], [48, 33], [47, 32], [45, 31], [44, 30], [42, 29], [40, 29], [38, 30], [36, 31], [36, 33], [38, 35], [38, 37]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Turkey", "nameCN": "土耳其" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[26, 42], [28, 41], [32, 41], [36, 41], [40, 41], [44, 40], [46, 38], [44, 37], [42, 37], [40, 37], [38, 37], [36, 37], [34, 36], [32, 36], [30, 36], [28, 36], [26, 37], [26, 39], [26, 42]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Syria", "nameCN": "叙利亚" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[36, 37], [38, 37], [40, 37], [42, 37], [42, 35], [41, 34], [40, 33], [38, 32], [36, 33], [35, 34], [35, 36], [36, 37]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Jordan", "nameCN": "约旦" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[35, 33], [36, 33], [38, 32], [38, 30], [36, 29], [35, 29], [35, 31], [35, 33]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Israel", "nameCN": "以色列" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[34.3, 31.3], [34.5, 31.3], [35, 31.5], [35.2, 31.5], [35.5, 31.8], [35, 32], [34.8, 32.8], [34.3, 31.3]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Lebanon", "nameCN": "黎巴嫩" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[35.2, 34.6], [35.8, 34.6], [36, 34.3], [36, 33.9], [35.5, 33.8], [35.2, 33.9], [35.2, 34.3], [35.2, 34.6]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "United Arab Emirates", "nameCN": "阿联酋" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[52, 24], [54, 24], [55, 24], [56, 24], [56, 26], [55, 26], [54, 26], [52, 25], [52, 24]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Qatar", "nameCN": "卡塔尔" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[50.5, 25.5], [51.5, 25.5], [51.5, 25.2], [50.5, 25.2], [50.5, 25.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Bahrain", "nameCN": "巴林" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[50.3, 26.2], [50.7, 26.2], [50.7, 26], [50.3, 26], [50.3, 26.2]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Kuwait", "nameCN": "科威特" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[46, 29.5], [48, 29.5], [48.5, 29], [48.5, 28.5], [47, 28.5], [46, 28.5], [46, 29.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Oman", "nameCN": "阿曼" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[56, 26], [57, 26], [58, 24], [58, 22], [60, 21], [62, 20], [60, 18], [58, 17], [56, 17], [55, 18], [54, 20], [54, 22], [55, 24], [56, 26]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Yemen", "nameCN": "也门" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[42, 18], [44, 18], [46, 16], [48, 14], [50, 13], [52, 13], [54, 14], [56, 14], [58, 15], [58, 13], [56, 12], [54, 12], [52, 13], [50, 13], [48, 14], [46, 14], [44, 15], [42, 16], [42, 18]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Egypt", "nameCN": "埃及" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[25, 31], [28, 31], [32, 31], [34, 31], [35, 29], [35, 27], [34, 25], [32, 22], [30, 22], [28, 22], [25, 22], [25, 31]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Afghanistan", "nameCN": "阿富汗" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[60, 38], [65, 38], [69, 37], [71, 36], [72, 34], [70, 33], [67, 31], [63, 30], [60, 30], [58, 32], [60, 35], [60, 38]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Pakistan", "nameCN": "巴基斯坦" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[60, 38], [62, 37], [66, 30], [67, 28], [69, 26], [71, 24], [74, 20], [75, 18], [74, 12], [61, 12], [60, 20], [60, 30], [60, 38]]]
            }
        }
    ]
};

// ==================== 国家中心点 ====================
const countryCenters = {
    "Saudi Arabia": [24, 48], "Iran": [32, 53], "Iraq": [33, 44], "Turkey": [39, 35],
    "Syria": [35, 38], "Jordan": [31, 36], "Israel": [31.5, 34.9], "Lebanon": [34, 35.8],
    "United Arab Emirates": [24, 54], "Qatar": [25.3, 51.2], "Bahrain": [26.1, 50.5],
    "Kuwait": [29, 47.5], "Oman": [22, 57], "Yemen": [15, 48], "Egypt": [27, 30],
    "Afghanistan": [34, 66], "Pakistan": [30, 67],
    // 石油进口国中心点
    "China": [35, 105], "Japan": [36, 138], "South Korea": [37, 128], "India": [20, 78],
    "United States": [40, -100], "Canada": [60, -95], "Brazil": [-15, -50],
    "Russia": [60, 100], "United Kingdom": [54, -2], "France": [46, 2], "Germany": [51, 10],
    "Italy": [42, 12], "Spain": [40, -4], "Netherlands": [52, 5], "Greece": [39, 22],
    "Azerbaijan": [40, 48], "Kazakhstan": [48, 66],
    "Australia": [-25, 133], "South Africa": [-30, 25], "Nigeria": [10, 8],
    "Morocco": [32, -6], "Algeria": [28, 3], "Libya": [27, 17],
    // 非国家实体中心点
    "黎巴嫩真主党": [33.8, 35.5], "伊拉克民兵": [34, 44], "也门胡塞": [15.5, 43],
    "胡塞武装": [15.5, 43], "真主党": [33.8, 35.5],
    "哈马斯": [31.5, 34.3], "巴勒斯坦哈马斯": [31.5, 34.3],
    "伊斯兰国": [34, 40], "基地组织": [33, 42],
    "库尔德武装": [36.5, 42], "伊斯兰国呼罗珊分支": [34, 62]
};
