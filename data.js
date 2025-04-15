// 冷氣機型號資料 (坪數限制在25以內)
var sampleData = [
    {
        area: 5, 
        height: "一般高度", 
        environment: "無", 
        capacity: 3.5, 
        recommended_capacity: 3.6, 
        recommended_model: "FOR-321HA32FIWR-321HA32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-321HA32",
        specs: "適用5坪、一般高度空間，能效比3.6，節能省電，靜音運轉"
    },
    {
        area: 5, 
        height: "一般高度", 
        environment: "東西曬", 
        capacity: 3.9, 
        recommended_capacity: 4.2, 
        recommended_model: "FOR-351HA32FIWR-351HA32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-351HA32",
        specs: "適用5坪、一般高度但有東西曬的空間，強效冷房，舒適送風"
    },
    {
        area: 5, 
        height: "挑高(超過3m)", 
        environment: "無", 
        capacity: 3.9, 
        recommended_capacity: 4.2, 
        recommended_model: "FOR-351HA32FIWR-351HA32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-351HA32",
        specs: "適用5坪、挑高空間，強勁冷氣流可達天花板高度，均勻降溫"
    },
    {
        area: 10, 
        height: "一般高度", 
        environment: "無", 
        capacity: 7.0, 
        recommended_capacity: 7.2, 
        recommended_model: "FOR-631HA32FIWR-631HA32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-631HA32",
        specs: "適用10坪標準空間，高效能設計，智慧變頻，省電環保"
    },
    {
        area: 10, 
        height: "一般高度", 
        environment: "東西曬", 
        capacity: 7.7, 
        recommended_capacity: 8.0, 
        recommended_model: "FOR-701HA32FIWR-701HA32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-701HA32",
        specs: "適用10坪有東西曬的空間，具備抗紫外線設計，快速降溫功能"
    },
    {
        area: 10, 
        height: "一般高度", 
        environment: "頂樓或鐵皮", 
        capacity: 8.1, 
        recommended_capacity: 10.5, 
        recommended_model: "FOR-105HV32FIWR-105HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-105HV32",
        specs: "適用10坪頂樓或鐵皮空間，特殊強化設計，可承受高溫環境"
    },
    {
        area: 10, 
        height: "一般高度", 
        environment: "東西曬, 頂樓或鐵皮", 
        capacity: 8.8, 
        recommended_capacity: 10.5, 
        recommended_model: "FOR-105HV32FIWR-105HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-105HV32",
        specs: "適用惡劣環境，強化散熱設計，超強冷房能力，智慧溫控"
    },
    {
        area: 10, 
        height: "一般高度", 
        environment: "大片落地窗, 人員密度高, 動態活動", 
        capacity: 9.1, 
        recommended_capacity: 10.5, 
        recommended_model: "FOR-105HV32FIWR-105HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-105HV32",
        specs: "適用商業空間，智慧感應人流，自動調節冷度，節能設計"
    },
    {
        area: 10, 
        height: "挑高(超過3m)", 
        environment: "無", 
        capacity: 7.7, 
        recommended_capacity: 8.0, 
        recommended_model: "FOR-701HA32FIWR-701HA32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-701HA32",
        specs: "適用10坪挑高空間，強力送風，三度空間循環，均勻制冷"
    },
    {
        area: 15, 
        height: "一般高度", 
        environment: "無", 
        capacity: 10.5, 
        recommended_capacity: 10.5, 
        recommended_model: "FOR-105HV32FIWR-105HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-105HV32",
        specs: "適用15坪標準空間，高效變頻壓縮機，低噪音設計，節能省電"
    },
    {
        area: 15, 
        height: "一般高度", 
        environment: "東西曬, 頂樓或鐵皮", 
        capacity: 13.1, 
        recommended_capacity: 14.8, 
        recommended_model: "FOR-142HV32FIWR-142HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-142HV32",
        specs: "適用15坪高熱負荷環境，超強冷凍能力，智慧除濕功能"
    },
    {
        area: 15, 
        height: "挑高(超過3m)", 
        environment: "無", 
        capacity: 11.6, 
        recommended_capacity: 11.8, 
        recommended_model: "FOR-116HV32FIWR-116HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-116HV32",
        specs: "適用15坪挑高空間，大範圍送風，快速降溫，智慧風向控制"
    },
    {
        area: 20, 
        height: "一般高度", 
        environment: "無", 
        capacity: 14.0, 
        recommended_capacity: 14.8, 
        recommended_model: "FOR-142HV32FIWR-142HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-142HV32",
        specs: "適用20坪大空間，超大風量，四面出風設計，快速降溫"
    },
    {
        area: 20, 
        height: "一般高度", 
        environment: "頂樓或鐵皮, 人員密度高, 動態活動", 
        capacity: 18.2, 
        recommended_capacity: "專人協助", 
        recommended_model: "專人協助",
        image_url: "https://via.placeholder.com/300x200?text=專人協助",
        specs: "此環境需要多台機器或中央空調系統，建議由專業人員現場評估"
    },
    {
        area: 20, 
        height: "挑高(超過3.5m)", 
        environment: "東西曬, 頂樓或鐵皮", 
        capacity: 19.3, 
        recommended_capacity: "專人協助", 
        recommended_model: "專人協助",
        image_url: "https://via.placeholder.com/300x200?text=專人協助",
        specs: "複雜環境需要客製化空調解決方案，請聯繫我們的專業顧問"
    },
    {
        area: 25, 
        height: "一般高度", 
        environment: "無", 
        capacity: 17.5, 
        recommended_capacity: 17.6, 
        recommended_model: "FOR-160HV32FIWR-160HV32",
        image_url: "https://via.placeholder.com/300x200?text=FOR-160HV32",
        specs: "適用25坪大空間，本系列最大冷房能力，智慧變頻，節能環保"
    }
];
