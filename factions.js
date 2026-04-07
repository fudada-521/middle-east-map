// ==================== 国家势力派系数据 ====================
const countryFactions = {
    "Saudi Arabia": {
        ethnicGroups: [
            { name: "阿拉伯人", population: 90, color: "#8B4513" },
            { name: "其他民族", population: 10, color: "#D2691E" }
        ],
        religions: [
            { name: "伊斯兰教(逊尼派)", influence: 85, color: "#DAA520" },
            { name: "伊斯兰教(什叶派)", influence: 10, color: "#228B22" },
            { name: "其他", influence: 5, color: "#808080" }
        ],
        politicalPower: [
            { name: "王室核心派系", power: 85, color: "#8B4513" },
            { name: "宗教保守派", power: 70, color: "#D2691E" },
            { name: "现代化改革派", power: 45, color: "#F4A460" },
            { name: "商业精英阶层", power: 55, color: "#DEB887" },
            { name: "军方势力", power: 50, color: "#556B2F" }
        ]
    },
    "Iran": {
        ethnicGroups: [
            { name: "波斯人", population: 65, color: "#228B22" },
            { name: "阿塞拜疆人", population: 16, color: "#32CD32" },
            { name: "库尔德人", population: 10, color: "#6B8E23" },
            { name: "其他民族", population: 9, color: "#9ACD32" }
        ],
        religions: [
            { name: "伊斯兰教(什叶派)", influence: 90, color: "#228B22" },
            { name: "伊斯兰教(逊尼派)", influence: 5, color: "#DAA520" },
            { name: "其他宗教", influence: 5, color: "#808080" }
        ],
        politicalPower: [
            { name: "最高领袖哈梅内伊派", power: 90, color: "#228B22" },
            { name: "革命卫队", power: 85, color: "#32CD32" },
            { name: "保守派教士集团", power: 70, color: "#6B8E23" },
            { name: "改革派/温和派", power: 40, color: "#9ACD32" },
            { name: "强硬派/民族主义者", power: 55, color: "#556B2F" }
        ]
    },
    "Iraq": {
        ethnicGroups: [
            { name: "阿拉伯人", population: 75, color: "#CD853F" },
            { name: "库尔德人", population: 20, color: "#4169E1" },
            { name: "土库曼人", population: 3, color: "#DAA520" },
            { name: "其他民族", population: 2, color: "#808080" }
        ],
        religions: [
            { name: "伊斯兰教(什叶派)", influence: 60, color: "#CD853F" },
            { name: "伊斯兰教(逊尼派)", influence: 35, color: "#DAA520" },
            { name: "基督教", influence: 3, color: "#4169E1" },
            { name: "其他", influence: 2, color: "#808080" }
        ],
        politicalPower: [
            { name: "什叶派政治联盟", power: 75, color: "#CD853F" },
            { name: "库尔德斯坦民主党", power: 65, color: "#4169E1" },
            { name: "逊尼派政治联盟", power: 35, color: "#DAA520" },
            { name: "伊斯兰国残余", power: 10, color: "#2F4F4F" }
        ]
    },
    "Turkey": {
        ethnicGroups: [
            { name: "土耳其人", population: 70, color: "#FF6347" },
            { name: "库尔德人", population: 18, color: "#4169E1" },
            { name: "其他民族", population: 12, color: "#808080" }
        ],
        religions: [
            { name: "伊斯兰教(逊尼派)", influence: 85, color: "#FF6347" },
            { name: "伊斯兰教(什叶派)", influence: 5, color: "#228B22" },
            { name: "无宗教/世俗", influence: 8, color: "#4169E1" },
            { name: "其他", influence: 2, color: "#808080" }
        ],
        politicalPower: [
            { name: "正义与发展党", power: 80, color: "#FF6347" },
            { name: "民族主义行动党", power: 60, color: "#DC143C" },
            { name: "共和人民党", power: 45, color: "#B22222" },
            { name: "库尔德政党", power: 40, color: "#4169E1" },
            { name: "居伦运动", power: 25, color: "#87CEEB" }
        ]
    },
    "Syria": {
        ethnicGroups: [
            { name: "阿拉伯人", population: 70, color: "#DAA520" },
            { name: "库尔德人", population: 15, color: "#4169E1" },
            { name: "阿拉维派", population: 12, color: "#8B0000" },
            { name: "其他民族", population: 3, color: "#808080" }
        ],
        religions: [
            { name: "伊斯兰教(逊尼派)", influence: 60, color: "#DAA520" },
            { name: "伊斯兰教(阿拉维派)", influence: 12, color: "#8B0000" },
            { name: "基督教", influence: 10, color: "#4169E1" },
            { name: "德鲁兹派", influence: 8, color: "#6B8E23" },
            { name: "其他", influence: 10, color: "#808080" }
        ],
        politicalPower: [
            { name: "阿萨德家族/阿拉维派", power: 85, color: "#8B0000" },
            { name: "革命力量/自由军", power: 25, color: "#FFD700" },
            { name: "伊斯兰主义反对派", power: 20, color: "#DAA520" },
            { name: "库尔德武装", power: 30, color: "#4169E1" },
            { name: "伊斯兰国残余", power: 5, color: "#2F4F4F" }
        ]
    },
    "Israel": {
        ethnicGroups: [
            { name: "犹太人", population: 73, color: "#4169E1" },
            { name: "阿拉伯人", population: 21, color: "#228B22" },
            { name: "其他民族", population: 6, color: "#808080" }
        ],
        religions: [
            { name: "犹太教", influence: 75, color: "#4169E1" },
            { name: "伊斯兰教", influence: 18, color: "#228B22" },
            { name: "基督教", influence: 4, color: "#4169E1" },
            { name: "其他", influence: 3, color: "#808080" }
        ],
        politicalPower: [
            { name: "利库德集团", power: 75, color: "#4169E1" },
            { name: "蓝白党", power: 55, color: "#1E90FF" },
            { name: "沙斯党", power: 45, color: "#000080" },
            { name: "联合阿拉伯名单", power: 35, color: "#228B22" },
            { name: "宗教锡安主义者", power: 50, color: "#8B008B" }
        ]
    },
    "Lebanon": {
        ethnicGroups: [
            { name: "黎巴嫩人(混合)", population: 70, color: "#87CEEB" },
            { name: "巴勒斯坦人", population: 20, color: "#228B22" },
            { name: "其他", population: 10, color: "#808080" }
        ],
        religions: [
            { name: "伊斯兰教(什叶派)", influence: 35, color: "#87CEEB" },
            { name: "基督教(马龙派)", influence: 30, color: "#4169E1" },
            { name: "伊斯兰教(逊尼派)", influence: 27, color: "#228B22" },
            { name: "德鲁兹派", influence: 8, color: "#6B8E23" }
        ],
        politicalPower: [
            { name: "真主党", power: 85, color: "#87CEEB" },
            { name: "基督教马龙派", power: 60, color: "#4169E1" },
            { name: "逊尼派政党", power: 50, color: "#228B22" },
            { name: "德鲁兹派", power: 35, color: "#6B8E23" },
            { name: "民主自由党", power: 30, color: "#9932CC" }
        ]
    },
    "Egypt": {
        ethnicGroups: [
            { name: "埃及人(科普特)", population: 90, color: "#FFD700" },
            { name: "贝都因人", population: 5, color: "#DAA520" },
            { name: "其他", population: 5, color: "#808080" }
        ],
        religions: [
            { name: "伊斯兰教(逊尼派)", influence: 90, color: "#FFD700" },
            { name: "基督教(科普特)", influence: 10, color: "#4169E1" }
        ],
        politicalPower: [
            { name: "军方集团", power: 90, color: "#FFD700" },
            { name: "穆斯林兄弟会", power: 40, color: "#228B22" },
            { name: "塞西支持网络", power: 75, color: "#DAA520" },
            { name: "自由派知识分子", power: 30, color: "#4169E1" },
            { name: "宗教极端势力", power: 20, color: "#8B0000" }
        ]
    },
    "Afghanistan": {
        ethnicGroups: [
            { name: "普什图人", population: 40, color: "#A0522D" },
            { name: "塔吉克人", population: 25, color: "#4169E1" },
            { name: "哈扎拉人", population: 10, color: "#8B4513" },
            { name: "乌兹别克人", population: 10, color: "#6B8E23" },
            { name: "其他民族", population: 15, color: "#808080" }
        ],
        religions: [
            { name: "伊斯兰教(逊尼派)", influence: 90, color: "#A0522D" },
            { name: "伊斯兰教(什叶派)", influence: 8, color: "#228B22" },
            { name: "其他", influence: 2, color: "#808080" }
        ],
        politicalPower: [
            { name: "塔利班领导层", power: 90, color: "#A0522D" },
            { name: "哈卡尼网络", power: 65, color: "#8B4513" },
            { name: "民族抵抗阵线", power: 25, color: "#4169E1" },
            { name: "伊斯兰国呼罗珊分支", power: 15, color: "#2F4F4F" },
            { name: "部落长老会议", power: 40, color: "#DEB887" }
        ]
    },
    "Pakistan": {
        ethnicGroups: [
            { name: "旁遮普人", population: 45, color: "#6B8E23" },
            { name: "信德人", population: 18, color: "#228B22" },
            { name: "普什图人", population: 15, color: "#A0522D" },
            { name: "俾路支人", population: 10, color: "#4169E1" },
            { name: "其他民族", population: 12, color: "#808080" }
        ],
        religions: [
            { name: "伊斯兰教(逊尼派)", influence: 80, color: "#6B8E23" },
            { name: "伊斯兰教(什叶派)", influence: 15, color: "#228B22" },
            { name: "其他宗教", influence: 5, color: "#808080" }
        ],
        politicalPower: [
            { name: "军方高层", power: 85, color: "#6B8E23" },
            { name: "人民党", power: 55, color: "#228B22" },
            { name: "正义运动党", power: 60, color: "#4169E1" },
            { name: "伊斯兰促进会", power: 40, color: "#8B008B" },
            { name: "宗教政党联盟", power: 35, color: "#FF6347" }
        ]
    }
};
