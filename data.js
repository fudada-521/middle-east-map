// ==================== 国家数据 ====================
const countryData = {
    "Saudi Arabia": { flag: "🇸🇦", color: "#8B4513", name: "沙特阿拉伯" },
    "Iran": { flag: "🇮🇷", color: "#228B22", name: "伊朗" },
    "Iraq": { flag: "🇮🇶", color: "#CD853F", name: "伊拉克" },
    "Turkey": { flag: "🇹🇷", color: "#FF6347", name: "土耳其" },
    "Syria": { flag: "🇸🇾", color: "#DAA520", name: "叙利亚" },
    "Jordan": { flag: "🇯🇴", color: "#9ACD32", name: "约旦" },
    "Israel": { flag: "🇮🇱", color: "#4169E1", name: "以色列" },
    "Lebanon": { flag: "🇱🇧", color: "#87CEEB", name: "黎巴嫩" },
    "United Arab Emirates": { flag: "🇦🇪", color: "#2E8B57", name: "阿联酋" },
    "Qatar": { flag: "🇶🇦", color: "#9932CC", name: "卡塔尔" },
    "Bahrain": { flag: "🇧🇭", color: "#FF69B4", name: "巴林" },
    "Kuwait": { flag: "🇰🇼", color: "#20B2AA", name: "科威特" },
    "Oman": { flag: "🇴🇲", color: "#FF8C00", name: "阿曼" },
    "Yemen": { flag: "🇾🇪", color: "#808080", name: "也门" },
    "Egypt": { flag: "🇪🇬", color: "#FFD700", name: "埃及" },
    "Afghanistan": { flag: "🇦🇫", color: "#A0522D", name: "阿富汗" },
    "Pakistan": { flag: "🇵🇰", color: "#6B8E23", name: "巴基斯坦" },
    // 欧洲主要石油买家
    "United Kingdom": { flag: "🇬🇧", color: "#C8102E", name: "英国" },
    "France": { flag: "🇫🇷", color: "#0055A4", name: "法国" },
    "Germany": { flag: "🇩🇪", color: "#000000", name: "德国" },
    "Italy": { flag: "🇮🇹", color: "#008C45", name: "意大利" },
    "Spain": { flag: "🇪🇸", color: "#AA151B", name: "西班牙" },
    "Netherlands": { flag: "🇳🇱", color: "#FF6600", name: "荷兰" },
    "Greece": { flag: "🇬🇷", color: "#0D5EAF", name: "希腊" }
};

// 中文名到countryCenters键的映射
const nameToKey = {
    "沙特阿拉伯": "Saudi Arabia", "沙特": "Saudi Arabia",
    "伊朗": "Iran",
    "伊拉克": "Iraq",
    "土耳其": "Turkey",
    "叙利亚": "Syria",
    "约旦": "Jordan",
    "以色列": "Israel",
    "黎巴嫩": "Lebanon",
    "阿联酋": "United Arab Emirates", "阿伯": "United Arab Emirates",
    "卡塔尔": "Qatar",
    "巴林": "Bahrain",
    "科威特": "Kuwait",
    "阿曼": "Oman",
    "也门": "Yemen",
    "埃及": "Egypt",
    "阿富汗": "Afghanistan",
    "巴基斯坦": "Pakistan",
    "美国": "United States",
    "俄罗斯": "Russia",
    "英国": "United Kingdom",
    "中国": "China",
    "日本": "Japan",
    "韩国": "South Korea",
    "印度": "India",
    "加拿大": "Canada",
    "巴西": "Brazil",
    "法国": "France",
    "德国": "Germany",
    "意大利": "Italy",
    "西班牙": "Spain",
    "荷兰": "Netherlands",
    "希腊": "Greece",
    "哈萨克斯坦": "Kazakhstan",
    "澳大利亚": "Australia",
    "南非": "South Africa",
    "尼日利亚": "Nigeria",
    "摩洛哥": "Morocco",
    "阿尔及利亚": "Algeria",
    "利比亚": "Libya",
    "阿塞拜疆": "Azerbaijan",
    // 非国家实体
    "黎巴嫩真主党": "黎巴嫩真主党", "真主党": "黎巴嫩真主党",
    "伊拉克民兵": "伊拉克民兵",
    "也门胡塞": "也门胡塞", "胡塞武装": "胡塞武装",
    "哈马斯": "哈马斯", "巴勒斯坦哈马斯": "哈马斯",
    "伊斯兰国": "伊斯兰国", "基地组织": "基地组织",
    "库尔德武装": "库尔德武装",
    "伊斯兰国呼罗珊分支": "伊斯兰国呼罗珊分支"
};

// 通过各种名称获取countryData的键
function getCountryKey(name) {
    // 先检查是否是英文键
    if (countryData[name]) return name;
    // 再检查中文名映射
    if (nameToKey[name]) return nameToKey[name];
    // 遍历countryData，通过中文名匹配
    for (const [key, data] of Object.entries(countryData)) {
        if (data.name === name) return key;
    }
    return null;
}

// 根据国家名称获取旗帜
function getCountryFlag(name) {
    const key = getCountryKey(name);
    if (key && countryData[key]) {
        return countryData[key].flag;
    }
    // 特殊实体的旗帜映射
    const flagMap = {
        "美国": "🇺🇸", "俄罗斯": "🇷🇺", "英国": "🇬🇧", "中国": "🇨🇳",
        "北约": "🅰️", "土耳其": "🇹🇷", "黎巴嫩真主党": "🔶",
        "伊拉克民兵": "🔶", "也门胡塞": "🔶", "哈马斯": "🔶",
        "胡塞武装": "🔶", "基地组织": "⚫", "伊斯兰国": "⚫",
        "库尔德武装": "🔶", "伊斯兰国呼罗珊分支": "⚫"
    };
    return flagMap[name] || '🏳️';
}

// 为盟友/敌对国家列表添加旗帜
function formatCountriesWithFlags(countriesStr) {
    if (!countriesStr) return '-';
    const countries = countriesStr.split(/[、,，]/).map(s => s.trim()).filter(s => s);
    return countries.map(c => getCountryFlag(c) + ' ' + c).join('、');
}
