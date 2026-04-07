// ==================== 国家详细信息 ====================
const countryDetails = {
    "Saudi Arabia": {
        regime: "沙特阿拉伯王国", regimeType: "绝对君主制", leader: "萨勒曼国王",
        ideology: "瓦哈比主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "35,000,000", economy: "石油",
        allies: "阿联酋、巴林、科威特、阿曼、埃及、美国", enemies: "伊朗、卡塔尔、土耳其",
        oilExport: "中国、日本、韩国、印度、美国、英国、法国、德国、意大利、希腊、荷兰、西班牙", historicalName: "纳季德、希贾兹、图韦克"
    },
    "Iran": {
        regime: "伊朗伊斯兰共和国", regimeType: "伊斯兰共和制", leader: "哈梅内伊最高领袖",
        ideology: "伊斯兰教法学家监护", ethnicity: "波斯人", religion: "伊斯兰教（什叶派）",
        population: "87,000,000", economy: "石油",
        allies: "叙利亚、黎巴嫩真主党、伊拉克民兵、也门胡塞、俄罗斯", enemies: "沙特、以色列、美国",
        oilExport: "中国、土耳其、伊拉克、印度", historicalName: "波斯、埃兰、米底"
    },
    "Iraq": {
        regime: "伊拉克共和国", regimeType: "联邦议会共和制", leader: "总理苏丹尼",
        ideology: "民族主义", ethnicity: "阿拉伯人、库尔德人", religion: "伊斯兰教（什叶派）",
        population: "42,000,000", economy: "石油",
        allies: "伊朗、美国（有限）、土耳其", enemies: "伊斯兰国、沙特",
        oilExport: "中国、印度、韩国、土耳其", historicalName: "美索不达米亚、迦勒底、巴士拉"
    },
    "Turkey": {
        regime: "土耳其共和国", regimeType: "总统制共和制", leader: "埃尔多安总统",
        ideology: "土耳其保守主义", ethnicity: "土耳其人", religion: "伊斯兰教（逊尼派）",
        population: "85,000,000", economy: "制造业、旅游业",
        allies: "北约、美国、阿塞拜疆", enemies: "希腊、俄罗斯（复杂）、库尔德武装",
        oilExport: "伊拉克、伊朗、俄罗斯、阿塞拜疆", historicalName: "安纳托利亚、鲁姆、奥斯曼"
    },
    "Syria": {
        regime: "阿拉伯叙利亚共和国", regimeType: "总统制共和制", leader: "巴沙尔·阿萨德总统",
        ideology: "阿拉伯民族主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "21,000,000", economy: "石油、农业",
        allies: "伊朗、俄罗斯、黎巴嫩真主党", enemies: "以色列、美国、土耳其、沙特",
        oilExport: "伊拉克、伊朗", historicalName: "沙姆、大马士革"
    },
    "Jordan": {
        regime: "哈希姆约旦王国", regimeType: "君主立宪制", leader: "阿卜杜拉二世国王",
        ideology: "哈希姆主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "11,000,000", economy: "服务业、旅游业",
        allies: "美国、沙特、以色列（秘密）、埃及", enemies: "伊朗、伊斯兰国",
        oilExport: "沙特、伊拉克", historicalName: "外约旦、摩押、艾丁"
    },
    "Israel": {
        regime: "以色列国", regimeType: "议会制共和制", leader: "内塔尼亚胡总理",
        ideology: "犹太复国主义", ethnicity: "犹太人", religion: "犹太教",
        population: "9,000,000", economy: "科技、制造业",
        allies: "美国、英国、阿联酋、巴林、摩洛哥", enemies: "伊朗、叙利亚、黎巴嫩真主党、巴勒斯坦哈马斯",
        oilExport: "阿塞拜疆、伊拉克", historicalName: "巴勒斯坦、犹大、撒马利亚"
    },
    "Lebanon": {
        regime: "黎巴嫩共和国", regimeType: "教派分权制", leader: "米歇尔·奥恩总统",
        ideology: "教派民族主义", ethnicity: "黎巴嫩人", religion: "伊斯兰教（什叶派）",
        population: "6,000,000", economy: "金融、服务业",
        allies: "伊朗、叙利亚、真主党", enemies: "以色列、沙特、美国",
        oilExport: "伊拉克、伊朗", historicalName: "腓尼基、比布鲁斯、黎巴嫩山"
    },
    "United Arab Emirates": {
        regime: "阿拉伯联合酋长国", regimeType: "联邦君主制", leader: "哈利法·本·扎耶德总统",
        ideology: "温和伊斯兰主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "10,000,000", economy: "石油、金融",
        allies: "沙特、美国、以色列（正常化）、埃及", enemies: "伊朗、卡塔尔",
        oilExport: "日本、韩国、中国、印度", historicalName: "特鲁西尔阿曼、停战诸国"
    },
    "Qatar": {
        regime: "卡塔尔国", regimeType: "绝对君主制", leader: "塔米姆·本·哈马德·阿勒萨尼埃米尔",
        ideology: "温和伊斯兰主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "2,800,000", economy: "石油、天然气",
        allies: "土耳其、伊朗、哈马斯、美国（基地）", enemies: "沙特、阿联酋、巴林、埃及",
        oilExport: "日本、韩国、印度、中国", historicalName: "卡塔尔半岛"
    },
    "Bahrain": {
        regime: "巴林王国", regimeType: "君主立宪制", leader: "哈马德·本·伊萨·阿勒哈利法国王",
        ideology: "温和伊斯兰主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "1,500,000", economy: "石油、金融",
        allies: "沙特、美国、阿联酋、以色列（正常化）", enemies: "伊朗",
        oilExport: "沙特、阿联酋", historicalName: "米娜、穆哈拉格"
    },
    "Kuwait": {
        regime: "科威特国", regimeType: "君主立宪制", leader: "米沙尔·艾哈迈德·贾比尔·萨巴赫埃米尔",
        ideology: "温和伊斯兰主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "4,500,000", economy: "石油",
        allies: "沙特、美国", enemies: "伊朗",
        oilExport: "韩国、日本、中国、印度", historicalName: "科威特城"
    },
    "Oman": {
        regime: "阿曼苏丹国", regimeType: "君主制", leader: "海赛姆·本·塔里克·阿勒赛义德苏丹",
        ideology: "温和伊斯兰主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "5,000,000", economy: "石油、渔业",
        allies: "美国（缓冲国）、伊朗、沙特", enemies: "",
        oilExport: "中国、韩国、日本、印度", historicalName: "阿曼苏丹国、马斯喀特"
    },
    "Yemen": {
        regime: "也门共和国", regimeType: "总统制共和制", leader: "委员会领导",
        ideology: "民族主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "33,000,000", economy: "石油、农业",
        allies: "沙特（针对胡塞）、美国（反恐）", enemies: "胡塞武装、基地组织、伊斯兰国",
        oilExport: "沙特、阿联酋", historicalName: "阿拉伯也门、示巴、麦茵"
    },
    "Egypt": {
        regime: "阿拉伯埃及共和国", regimeType: "总统制共和制", leader: "塞西总统",
        ideology: "埃及民族主义", ethnicity: "阿拉伯人", religion: "伊斯兰教（逊尼派）",
        population: "104,000,000", economy: "旅游业、运河",
        allies: "美国、以色列（有限）、沙特、阿联酋", enemies: "土耳其（穆兄会）、伊朗",
        oilExport: "沙特、阿联酋", historicalName: "下埃及、埃及"
    },
    "Afghanistan": {
        regime: "阿富汗伊斯兰酋长国", regimeType: "神权酋长制", leader: "阿洪扎达最高领袖",
        ideology: "塔利班伊斯兰主义", ethnicity: "普什图人", religion: "伊斯兰教（逊尼派）",
        population: "40,000,000", economy: "农牧业",
        allies: "巴基斯坦、卡塔尔", enemies: "美国、伊斯兰国呼罗珊分支",
        oilExport: "伊朗、巴基斯坦", historicalName: "巴克特里亚、大夏、喀布尔"
    },
    "Pakistan": {
        regime: "巴基斯坦伊斯兰共和国", regimeType: "联邦议会共和制", leader: "阿里总统",
        ideology: "伊斯兰主义", ethnicity: "旁遮普人、信德人", religion: "伊斯兰教（逊尼派）",
        population: "240,000,000", economy: "农业、制造业",
        allies: "中国、土耳其、海湾国家", enemies: "印度、美国（复杂）",
        oilExport: "沙特、阿联酋、伊朗、伊拉克", historicalName: "印度河谷、犍陀罗、莫卧儿"
    },
    // 欧洲主要石油买家
    "United Kingdom": {
        regime: "大不列颠及北爱尔兰联合王国", regimeType: "君主立宪制", leader: "查尔斯三世国王",
        ideology: "议会民主制", ethnicity: "英格兰人、苏格兰人", religion: "基督教（新教）",
        population: "67,000,000", economy: "金融、服务业",
        allies: "美国、北约、欧盟（已脱欧）", enemies: "俄罗斯、伊朗",
        oilExport: "挪威、俄罗斯、中东", historicalName: "英格兰、大不列颠"
    },
    "France": {
        regime: "法兰西共和国", regimeType: "半总统制共和制", leader: "马克龙总统",
        ideology: "自由民主制", ethnicity: "法兰西人", religion: "基督教（天主教）",
        population: "68,000,000", economy: "制造业、农业、核能",
        allies: "美国、北约、欧盟、德国", enemies: "俄罗斯、伊朗",
        oilExport: "挪威、俄罗斯、中东、非洲", historicalName: "高卢、法兰西"
    },
    "Germany": {
        regime: "德意志联邦共和国", regimeType: "议会制共和制", leader: "朔尔茨总理",
        ideology: "社会民主制", ethnicity: "德意志人", religion: "基督教（天主教/新教）",
        population: "83,000,000", economy: "制造业、汽车工业",
        allies: "美国、北约、欧盟、法国", enemies: "俄罗斯",
        oilExport: "俄罗斯、挪威、中东、美国", historicalName: "日耳曼、普鲁士、德意志"
    },
    "Italy": {
        regime: "意大利共和国", regimeType: "议会制共和制", leader: "梅洛尼总理",
        ideology: "多党民主制", ethnicity: "意大利人", religion: "基督教（天主教）",
        population: "60,000,000", economy: "制造业、农业、旅游业",
        allies: "美国、北约、欧盟", enemies: "俄罗斯",
        oilExport: "利比亚、俄罗斯、沙特、伊朗", historicalName: "罗马、意大利王国"
    },
    "Spain": {
        regime: "西班牙王国", regimeType: "君主立宪制", leader: "费利佩六世国王",
        ideology: "议会民主制", ethnicity: "西班牙人", religion: "基督教（天主教）",
        population: "47,000,000", economy: "制造业、旅游业、农业",
        allies: "美国、北约、欧盟", enemies: "摩洛哥（休达梅利利亚问题）",
        oilExport: "墨西哥、尼日利亚、俄罗斯、中东", historicalName: "伊比利亚、西班牙帝国"
    },
    "Netherlands": {
        regime: "荷兰王国", regimeType: "君主立宪制", leader: "威廉-亚历山大国王",
        ideology: "议会民主制", ethnicity: "荷兰人", religion: "基督教（天主教/新教）",
        population: "18,000,000", economy: "贸易、金融、农业",
        allies: "美国、北约、欧盟、德国", enemies: "俄罗斯",
        oilExport: "挪威、俄罗斯、沙特、伊朗", historicalName: "尼德兰、荷兰共和国"
    },
    "Greece": {
        regime: "希腊共和国", regimeType: "议会制共和制", leader: "米佐塔基斯总理",
        ideology: "议会民主制", ethnicity: "希腊人", religion: "东正教",
        population: "10,000,000", economy: "航运、旅游业、农业",
        allies: "美国、欧盟、北约、塞浦路斯", enemies: "土耳其（复杂）",
        oilExport: "俄罗斯、沙特、伊朗、伊拉克", historicalName: "希腊、拜占庭"
    }
};
