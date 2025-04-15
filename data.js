// 演示用的示例數據
var sampleData = [
    {area: 5, height: "一般高度", environment: "無", capacity: 3.5, recommended_capacity: 3.6, recommended_model: "FOR-321HA32FIWR-321HA32"},
    {area: 5, height: "一般高度", environment: "東西曬", capacity: 3.9, recommended_capacity: 4.2, recommended_model: "FOR-351HA32FIWR-351HA32"},
    {area: 5, height: "一般高度", environment: "頂樓或鐵皮", capacity: 4.0, recommended_capacity: 4.2, recommended_model: "FOR-351HA32FIWR-351HA32"},
    {area: 5, height: "一般高度", environment: "東西曬, 頂樓或鐵皮", capacity: 4.4, recommended_capacity: 5.2, recommended_model: "FOR-451HA32FIWR-451HA32"},
    {area: 10, height: "一般高度", environment: "無", capacity: 7.0, recommended_capacity: 7.2, recommended_model: "FOR-631HA32FIWR-631HA32"},
    {area: 10, height: "一般高度", environment: "東西曬", capacity: 7.7, recommended_capacity: 8.0, recommended_model: "FOR-701HA32FIWR-701HA32"},
    {area: 10, height: "一般高度", environment: "頂樓或鐵皮", capacity: 8.1, recommended_capacity: 10.5, recommended_model: "FOR-105HV32FIWR-105HV32"},
    {area: 10, height: "一般高度", environment: "東西曬, 頂樓或鐵皮", capacity: 8.8, recommended_capacity: 10.5, recommended_model: "FOR-105HV32FIWR-105HV32"},
    {area: 10, height: "一般高度", environment: "大片落地窗, 人員密度高, 動態活動", capacity: 9.1, recommended_capacity: 10.5, recommended_model: "FOR-105HV32FIWR-105HV32"},
    {area: 10, height: "挑高(超過3m)", environment: "無", capacity: 7.7, recommended_capacity: 8.0, recommended_model: "FOR-701HA32FIWR-701HA32"},
    {area: 10, height: "挑高(超過3m)", environment: "東西曬", capacity: 8.5, recommended_capacity: 10.5, recommended_model: "FOR-105HV32FIWR-105HV32"},
    {area: 15, height: "一般高度", environment: "無", capacity: 10.5, recommended_capacity: 10.5, recommended_model: "FOR-105HV32FIWR-105HV32"},
    {area: 15, height: "一般高度", environment: "東西曬, 頂樓或鐵皮", capacity: 13.1, recommended_capacity: 14.8, recommended_model: "FOR-142HV32FIWR-142HV32"},
    {area: 15, height: "挑高(超過3m)", environment: "無", capacity: 11.6, recommended_capacity: 11.8, recommended_model: "FOR-116HV32FIWR-116HV32"},
    {area: 20, height: "一般高度", environment: "無", capacity: 14.0, recommended_capacity: 14.8, recommended_model: "FOR-142HV32FIWR-142HV32"},
    {area: 20, height: "一般高度", environment: "頂樓或鐵皮, 人員密度高, 動態活動", capacity: 18.2, recommended_capacity: "專人協助", recommended_model: "專人協助"},
    {area: 20, height: "挑高(超過3.5m)", environment: "東西曬, 頂樓或鐵皮", capacity: 19.3, recommended_capacity: "專人協助", recommended_model: "專人協助"},
    {area: 25, height: "一般高度", environment: "無", capacity: 17.5, recommended_capacity: 17.6, recommended_model: "FOR-160HV32FIWR-160HV32"},
    {area: 30, height: "一般高度", environment: "無", capacity: 21.0, recommended_capacity: "專人協助", recommended_model: "專人協助"},
    {area: 40, height: "一般高度", environment: "無", capacity: 28.0, recommended_capacity: "專人協助", recommended_model: "專人協助"},
    {area: 50, height: "一般高度", environment: "無", capacity: 35.0, recommended_capacity: "專人協助", recommended_model: "專人協助"}
];
