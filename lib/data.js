const fish = [
    {
        name:"خروف البحر",
        deep:2,
        start:5,
        rowEnd:2,
        colEnd:2
    },
    {   
        name:"سمك السلمون الأطلسي",
        deep:0,
        start:1,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"سمك القاروس المخطط",
        deep:8,
        start:3,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"مرجان ستاغورن",
        deep:9,
        start:7,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سردين البلشار الأوروبي",
        deep:22,
        start:1,
        rowEnd:1,
        colEnd:2
    },
    {   
        name:"الدب القطبي",
        deep:22,
        start:4,
        rowEnd:3,
        colEnd:4
    },
    {
        name:"سمكة البرمون",
        deep:31,
        start:3,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"سمكة المهرج البرتقالية",
        deep:31,
        start:7,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"السلطعون المخملي",
        deep:37,
        start:2,
        rowEnd:1,
        colEnd:2
    },
    {   
        name:"سمكة الهيبو تانج",
        deep:39,
        start:6,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"سمك القد الأطلسي",
        deep:46,
        start:3,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"تنين البحر المورق",
        deep:51,
        start:7,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"سمكة كلب البحر الشوكي",
        deep:53,
        start:1,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"سمكة الدلفين الشائعة (ماهي ماهي)",
        deep:60,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {   
        name:"سمك القاروس المنقط",
        deep:66,
        start:7,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"فلاوندر",
        deep:69,
        start:1,
        rowEnd:2,
        colEnd:2
    },
    {   
        name:"الحوت الأبيض",
        deep:75,
        start:2,
        rowEnd:2,
        colEnd:6
    },
    {
        name:"سمكة الباراكودا الكبيرة",
        deep:91,
        start:6,
        rowEnd:1,
        colEnd:3
    },
    {
        name:"الحوت القاتل",
        deep:106,
        start:1,
        rowEnd:5,
        colEnd:8
    },
    {
        name:"السمكة الرقيطة",
        deep:123,
        start:5,
        rowEnd:2,
        colEnd:3
    },
    {   
        name:"ليبتوسيريس",
        deep:135,
        start:7,
        rowEnd:1,
        colEnd:1
    },
    {
        name:"أسد البحر",
        deep:139,
        start:2,
        rowEnd:3,
        colEnd:3
    },
    {
        name:"القرش الثور",
        deep:153,
        start:4,
        rowEnd:3,
        colEnd:4
    },
    {
        name:"سمك الطبل الأسود",
        deep:163,
        start:1,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"السلحفاة الخضراء البحرية",
        deep:171,
        start:3,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمكة الماكريل الأطلسية",
        deep:181,
        start:2,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"سمكة العضاض",
        deep:184,
        start:6,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"غطسة المور ذو المنقار الوسيع",
        deep:208,
        start:4,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"سمكة الحدوق",
        deep:219,
        start:6,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"الأنقليس الذئبي",
        deep:219,
        start:1,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"قرش قطي",
        deep:232,
        start:3,
        rowEnd:2,
        colEnd:5
    },
    {
        name:"عشب البحر",
        deep:238,
        start:2,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"سلحفاة لجأة ردلي الزيتونية",
        deep:259,
        start:2,
        rowEnd:3,
        colEnd:3
    },
    {
        name:"القرش الأبيض الكبير",
        deep:271,
        start:5,
        rowEnd:3,
        colEnd:3
    },
    {
        name:"غطسة الدلافين قارورية الأنف",
        deep:286,
        start:2,
        rowEnd:2,
        colEnd:4
    },
    {
        name:"الحبار الزجاجي",
        deep:301,
        start:6,
        rowEnd:2,
        colEnd:1
    },
    {
        name:"القرش الصمغي (الغائر)",
        deep:316,
        start:3,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"الإنسان",
        deep:334,
        start:6,
        rowEnd:3,
        colEnd:3
    },
    {
        name:"القرش الأزرق",
        deep:355,
        start:2,
        rowEnd:3,
        colEnd:2
    },
    {
        name:"الحبار المضيء",
        deep:376,
        start:5,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"تونة كبيرة العين",
        deep:412,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"ملائكة البحر",
        deep:457,
        start:2,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سلمون شينوك (السلمون الملك)",
        deep:474,
        start:6,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"قرش ماكو",
        deep:501,
        start:2,
        rowEnd:3,
        colEnd:6
    },
    {
        name:"غطسة البطريق الإمبراطور",
        deep:525,
        start:6,
        rowEnd:2,
        colEnd:1
    },
    {
        name:"سمكة السيف",
        deep:546,
        start:3,
        rowEnd:2,
        colEnd:4
    },
    {
        name:"سمكة الشمس",
        deep:576,
        start:2,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"مرجان خيزراني",
        deep:606,
        start:4,
        rowEnd:3,
        colEnd:2
    },
    {
        name:"سلطعون العنكبوت الياباني",
        deep:642,
        start:3,
        rowEnd:4,
        colEnd:4
    },
    {
        name:"شوكيات الجوف (أسماك الكهوف الشوكية)",
        deep:696,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"السلطعون الملك",
        deep:726,
        start:6,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"أخطبوط المحيط الهادئ العملاق",
        deep:765,
        start:2,
        rowEnd:5,
        colEnd:5
    },
    {
        name:"سمك المجداف العملاق",
        deep:806,
        start:1,
        rowEnd:3,
        colEnd:8
    },
    {
        name:"سمكة المونك فيش",
        deep:828,
        start:2,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمك القد (المحيط الهادئ)",
        deep:840,
        start:6,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"ماروس أورثوكانا",
        deep:855,
        start:2,
        rowEnd:3,
        colEnd:1
    },
    {
        name:"دودة فيجتورنيلا",
        deep:882,
        start:5,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"حوت العنبر",
        deep:919,
        start:2,
        rowEnd:4,
        colEnd:6
    },
    {
        name:"السلحفاة جلدية الظهر",
        deep:951,
        start:1,
        rowEnd:3,
        colEnd:3
    },
    {
        name:"الحوت المنقاري العملاق",
        deep:972,
        start:3,
        rowEnd:2,
        colEnd:4
    },
    {
        name:"سمكة السنارة",
        deep:1038,
        start:2,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمك الهلبوت البرتقالي",
        deep:1095,
        start:2,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"السمكة الفقاعية",
        deep:1161,
        start:3,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمك القرش المزركش",
        deep:1197,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"القرش العفريت",
        deep:1287,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"مرجان العلكة الفقاعية",
        deep:1329,
        start:2,
        rowEnd:3,
        colEnd:3
    },
    {
        name:"السمكة البليطة",
        deep:1368,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمكة عثة البحر",
        deep:1443,
        start:4,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"قنديل البحر الأحمر الكبير",
        deep:1479,
        start:4,
        rowEnd:3,
        colEnd:3
    },
    {
        name:"سمك هلبوت غرينلاند",
        deep:1515,
        start:5,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"الدودة الأنبوبية الكبيرة",
        deep:1554,
        start:4,
        rowEnd:4,
        colEnd:2
    },
    {
        name:"سلطعون يتي (yeti)",
        deep:1644,
        start:3,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"القرش سداسي الخياشيم",
        deep:1722,
        start:3,
        rowEnd:2,
        colEnd:5
    },
    {
        name:"غطسة حريش البحر",
        deep:1800,
        start:4,
        rowEnd:3,
        colEnd:2
    },
    {
        name:"الحبار الجوهرة",
        deep:1899,
        start:4,
        rowEnd:3,
        colEnd:4
    },
    {
        name:"قلم البحر",
        deep:1968,
        start:2,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"أخطبوط التلسكوب",
        deep:1998,
        start:4,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"آيزوبود عملاق",
        deep:2097,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"قرش غرينلاند",
        deep:2157,
        start:5,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"السبيدج العملاق",
        deep:2199,
        start:2,
        rowEnd:3,
        colEnd:6
    },
    {
        name:"السمكة ذات الرأس الشفاف (عيون البرميل)",
        deep:2298,
        start:4,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"غطسة فيل البحر",
        deep:2388,
        start:4,
        rowEnd:3,
        colEnd:4
    },
    {
        name:"السمكة العملاقة",
        deep:2496,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمكة الكيميرا",
        deep:2598,
        start:6,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمكة المبتلع الأسود",
        deep:2742,
        start:5,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمكة الأفعى",
        deep:2796,
        start:2,
        rowEnd:2,
        colEnd:1
    },
    {
        name:"الحبار الجهنمي",
        deep:2904,
        start:2,
        rowEnd:3,
        colEnd:2
    },
    {
        name:"خيار البحر الشفاف",
        deep:2949,
        start:6,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"حوت كوفييه ذو المنقار",
        deep:2997,
        start:3,
        rowEnd:2,
        colEnd:4
    },
    {
        name:"ثعبان البحر (غولبر ايل)",
        deep:3057,
        start:5,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"قنديل البحر (كوزميك)",
        deep:3096,
        start:4,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"السمكة ذات الفك المرتخي",
        deep:3186,
        start:4,
        rowEnd:2,
        colEnd:1
    },
    {
        name:"إسفنج القيثارة",
        deep:3318,
        start:5,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"القرش السيجاري",
        deep:3396,
        start:4,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"السمكة السحلية",
        deep:3498,
        start:5,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمكة الحوت المترهلة",
        deep:3573,
        start:3,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"سفينة التايتانيك",
        deep:3808,
        start:2,
        rowEnd:5,
        colEnd:6
    },
    {
        name:"السمكة البتاغونية ذو أنياب",
        deep:3894,
        start:3,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"أخطبوط دامبو",
        deep:3948,
        start:4,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"قنديل البحر (أتولا)",
        deep:4047,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"خنزير البحر",
        deep:4497,
        start:5,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"القرش عظيم الفم",
        deep:4599,
        start:3,
        rowEnd:3,
        colEnd:4
    },
    {
        name:"سمكة الفانج توث",
        deep:4698,
        start:4,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"سمكة التريبود",
        deep:4800,
        start:4,
        rowEnd:3,
        colEnd:2
    },
    {
        name:"روبيان الكاريديا",
        deep:4995,
        start:5,
        rowEnd:1,
        colEnd:1
    },
    {
        name:"سمكة بدون وجه",
        deep:5098,
        start:4,
        rowEnd:2,
        colEnd:1
    },
    {
        name:"نجم البحر الهش",
        deep:5497,
        start:3,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"سمكة العنكبوت",
        deep:5599,
        start:5,
        rowEnd:2,
        colEnd:1
    },
    {
        name:"سمكة غرينادير",
        deep:6799,
        start:3,
        rowEnd:2,
        colEnd:2
    },
    {
        name:"الخيتون (عديدة الأصناف)",
        deep:6895,
        start:4,
        rowEnd:1,
        colEnd:2
    },
    {
        name:"قنديل البحر المشطي",
        deep:7216,
        start:5,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"سمكة حلزون منطقة هدال",
        deep:8176,
        start:4,
        rowEnd:2,
        colEnd:3
    },
    {
        name:"ثعبان البحر (cusk eel)",
        deep:8368,
        start:4,
        rowEnd:2,
        colEnd:1
    },
    {
        name:"مزدوجات الأرجل في منطقة هدال",
        deep:10318,
        start:2,
        rowEnd:1,
        colEnd:1
    },
];

export default fish;