// ==================== 资源数据 ====================
const resourcesData = {
    // 石油/天然气田
    oilFields: [
        { name: "加瓦尔油田", coords: [24.5, 49], country: "沙特阿拉伯", type: "oil", reserves: "1120亿桶" },
        { name: "布尔甘油田", coords: [28.5, 48.5], country: "科威特", type: "oil", reserves: "660亿桶" },
        { name: "鲁迈拉油田", coords: [30.5, 47.5], country: "伊拉克", type: "oil", reserves: "1780亿桶" },
        { name: "基尔库克油田", coords: [34.5, 44.5], country: "伊拉克", type: "oil", reserves: "90亿桶" },
        { name: "阿卜盖莱克油田", coords: [29.5, 47.5], country: "伊拉克", type: "oil", reserves: "140亿桶" },
        { name: "马伦油田", coords: [30.8, 46.5], country: "伊拉克", type: "oil", reserves: "126亿桶" },
        { name: "阿扎德甘油田", coords: [30.5, 55.5], country: "伊朗", type: "oil", reserves: "67亿桶" },
        { name: "雅尔达油田", coords: [29.5, 50.5], country: "伊朗", type: "oil", reserves: "300亿桶" },
        { name: "阿联酋海上油田", coords: [24.5, 53], country: "阿联酋", type: "oil", reserves: "200亿桶" },
        { name: "卡塔尔北部气田", coords: [26, 52], country: "卡塔尔", type: "gas", reserves: "900万亿立方英尺" },
        { name: "南帕尔斯气田", coords: [27.5, 52.5], country: "伊朗/卡塔尔", type: "gas", reserves: "1400万亿立方英尺" }
    ],
    // 水资源
    waterResources: [
        { name: "幼发拉底河", coords: [34, 41], country: "叙利亚/伊拉克", type: "river" },
        { name: "底格里斯河", coords: [35, 44], country: "伊拉克", type: "river" },
        { name: "约旦河", coords: [32.5, 35.5], country: "约旦/以色列", type: "river" },
        { name: "尼罗河三角洲", coords: [31, 32], country: "埃及", type: "river" },
        { name: "阿拉伯河", coords: [30, 48], country: "伊朗/伊拉克", type: "river" },
        { name: "卡伦河", coords: [30.5, 51], country: "伊朗", type: "river" }
    ],
    // 战略港口
    ports: [
        { name: "霍尔木兹海峡", coords: [26.5, 56.3], country: "伊朗/阿曼", type: "strategic", significance: "全球20%石油运输经过" },
        { name: "苏伊士运河", coords: [30, 32.5], country: "埃及", type: "strategic", significance: "连接地中海与红海" },
        { name: "曼德海峡", coords: [12.5, 44], country: "也门/吉布提", type: "strategic", significance: "亚丁湾战略通道" },
        { name: "迪拜港", coords: [25, 55], country: "阿联酋", type: "commercial" },
        { name: "杰贝阿里港", coords: [25, 55.2], country: "阿联酋", type: "commercial" },
        { name: "阿巴斯港", coords: [27, 56], country: "伊朗", type: "military" },
        { name: "哈米德港", coords: [28.5, 50.5], country: "沙特阿拉伯", type: "oil" },
        { name: "拉斯坦努拉港", coords: [26.5, 50], country: "沙特阿拉伯", type: "oil" },
        { name: "亚丁港", coords: [12.8, 45], country: "也门", type: "strategic" },
        { name: "海法港", coords: [32.8, 35], country: "以色列", type: "commercial" },
        { name: "阿什杜德港", coords: [31.8, 34.6], country: "以色列", type: "commercial" },
        { name: "塞得港", coords: [31.3, 32.3], country: "埃及", type: "commercial" },
        { name: "亚历山大港", coords: [31.2, 29.9], country: "埃及", type: "commercial" },
        { name: "巴士拉港", coords: [30.5, 47.8], country: "伊拉克", type: "oil" },
        { name: "科威特港", coords: [29.4, 48], country: "科威特", type: "commercial" }
    ]
};

// ==================== 军事基地数据 ====================
const militaryBasesData = {
    // 美军基地
    usBases: [
        { name: "乌代德空军基地", coords: [25, 51], country: "卡塔尔", type: "air", personnel: "约10,000人" },
        { name: "阿尔阿宰季耶基地", coords: [24.5, 55], country: "阿联酋", type: "air", personnel: "约3,500人" },
        { name: "阿尔萨阿拉姆基地", coords: [24.4, 54], country: "阿联酋", type: "air", personnel: "约1,500人" },
        { name: "塞芬有空军基地", coords: [29.5, 47.5], country: "科威特", type: "air", personnel: "约8,000人" },
        { name: "塔林基地", coords: [30, 47.8], country: "科威特", type: "army", personnel: "约6,000人" },
        { name: "阿伊达马尼亚空军基地", coords: [33.5, 44], country: "伊拉克", type: "air", personnel: "约2,500人" },
        { name: "哈里尔将军基地", coords: [34.5, 43], country: "伊拉克", type: "army", personnel: "约3,000人" },
        { name: "因吉尔利克空军基地", coords: [38.5, 35], country: "土耳其", type: "air", personnel: "约5,000人" },
        { name: "土耳其空军基地群", coords: [37, 35.5], country: "土耳其", type: "air", personnel: "约3,000人" },
        { name: "帕尔万沙尔基地", coords: [34.8, 69], country: "阿富汗", type: "air", personnel: "约8,000人" },
        { name: "巴格拉姆空军基地", coords: [35.3, 69.3], country: "阿富汗", type: "air", personnel: "约10,000人" },
        { name: "红海海军基地", coords: [22.5, 38.5], country: "吉布提", type: "naval", personnel: "约4,000人" }
    ],
    // 俄罗斯军事存在
    russianBases: [
        { name: "赫梅米姆空军基地", coords: [35.5, 36.5], country: "叙利亚", type: "air", personnel: "约4,000人" },
        { name: "塔尔图斯海军基地", coords: [35, 36], country: "叙利亚", type: "naval", personnel: "约500人" },
        { name: "伊朗无人机基地", coords: [35.5, 51.5], country: "伊朗", type: "air", personnel: "联合使用" }
    ],
    // 战略要地
    strategicLocations: [
        { name: "戈兰高地", coords: [33, 35.8], country: "以色列/叙利亚", type: "ground", control: "以色列控制" },
        { name: "西奈半岛", coords: [28, 34], country: "埃及", type: "ground", control: "埃及/多国观察" },
        { name: "塞浦路斯英国主权基地", coords: [35, 33], country: "塞浦路斯", type: "naval", control: "英国" },
        { name: "阿尔卡米什", coords: [37, 42], country: "土耳其", type: "ground", control: "土耳其/北约" },
        { name: "科索沃美国基地", coords: [42.5, 21], country: "科索沃", type: "air", control: "美国/北约" }
    ]
};

// ==================== 贸易路线数据 ====================
const tradeRoutesData = {
    // 石油管道
    pipelines: [],
    // 海上贸易航线
    shippingRoutes: [],
    // 天然气管道
    gasPipelines: []
};
