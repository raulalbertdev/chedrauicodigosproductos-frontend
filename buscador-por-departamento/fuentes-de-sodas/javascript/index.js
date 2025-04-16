const productos = [
    { productName: "Alitas Rostizadas KG", metaTagDescription: "", ProductMultiEan: ["2513647"] }, // 1
    { productName: "Arroz Rojo", metaTagDescription: "", ProductMultiEan: ["2503274"] }, // 2
    { productName: "Bacalao A la Vizcaina KG FS", metaTagDescription: "", ProductMultiEan: ["2512584"] }, // 3
    { productName: "Café Americano", metaTagDescription: "", ProductMultiEan: ["2351092"] }, // 4
    { productName: "Café Capuchino Original", metaTagDescription: "", ProductMultiEan: ["2351124"] }, // 5
    { productName: "Café Capuchino Vainilla", metaTagDescription: "", ProductMultiEan: ["2351125"] }, // 6
    { productName: "Chilaquiles Rojos", metaTagDescription: "", ProductMultiEan: ["2503115"] }, // 7
    { productName: "Chocolate abuelita", metaTagDescription: "", ProductMultiEan: ["2351074"] }, // 8
    { productName: "Cochinita Pibil Kg *", metaTagDescription: "", ProductMultiEan: ["2504020"] }, // 9
    { productName: "Combo 1/4 pollo rostizado", metaTagDescription: "", ProductMultiEan: ["2358618"] }, // 10
    { productName: "Combo chester pierna y muslo", metaTagDescription: "", ProductMultiEan: ["2358614"] }, // 11
    { productName: "Frijol", metaTagDescription: "", ProductMultiEan: ["2502020"] }, // 12
    { productName: "Hamburguesa Res pz", metaTagDescription: "", ProductMultiEan: ["2351816"] }, // 13
    { productName: "HOTDOG PZA", metaTagDescription: "", ProductMultiEan: ["2358841"] }, // 14
    { productName: "Huevo Con Jamon", metaTagDescription: "", ProductMultiEan: ["2503649"] }, // 15
    { productName: "Huevo Guisado a la Mexicana", metaTagDescription: "", ProductMultiEan: ["2503650"] }, // 16
    { productName: "Huevo Guisado con Salsa Verde", metaTagDescription: "", ProductMultiEan: ["2503651"] }, // 17
    { productName: "Lechon Kg *", metaTagDescription: "", ProductMultiEan: ["2504021"] }, // 18
    { productName: "Mixiote De Pollo Kg M", metaTagDescription: "", ProductMultiEan: ["2507135"] }, // 19
    { productName: "Mixiote Estilo Hidalgo KG", metaTagDescription: "", ProductMultiEan: ["2507134"] }, // 20
    { productName: "Nachos Pieza", metaTagDescription: "", ProductMultiEan: ["2351826"] }, // 21
    { productName: "Nugget De Pollo Pza", metaTagDescription: "", ProductMultiEan: ["2359794"] }, // 22
    { productName: "Palomitas", metaTagDescription: "", ProductMultiEan: ["2351090"] }, // 23
    { productName: "Palomitas Chicas pz", metaTagDescription: "", ProductMultiEan: ["2351792"] }, // 24
    { productName: "Palomitas Sazonadas de queso", metaTagDescription: "", ProductMultiEan: ["2358847"] }, // 25
    { productName: "Papas Gajo Porcion gr 150", metaTagDescription: "", ProductMultiEan: ["2351795"] }, // 26
    { productName: "Pizza Hawaiana Sdaily FS", metaTagDescription: "", ProductMultiEan: ["2359071"] }, // 27
    { productName: "Pizza Pepperoni Sdaily FS", metaTagDescription: "", ProductMultiEan: ["2359072"] }, // 28
    { productName: "Platanos Fritos", metaTagDescription: "", ProductMultiEan: ["2503843"] }, // 29
    { productName: "Pollo Rostizado Grill F.S. (Chico de $99 mxn aproximadamente)", metaTagDescription: "", ProductMultiEan: ["2355486"] }, // 30
    { productName: "Pollo Rostizado Veraniego (Santo Pollo Jumbo de $129 mxn aproximadamente)", metaTagDescription: "", ProductMultiEan: ["2354862"] }, // 31
    { productName: "Pure de Papa", metaTagDescription: "", ProductMultiEan: ["2503090"] }, // 32
    { productName: "Rebanada Pizza Pepperoni Cong FS", metaTagDescription: "", ProductMultiEan: ["2359074"] }, // 33
    { productName: "Sincronizadas Quesadillas en triangulitos", metaTagDescription: "", ProductMultiEan: ["2358848"] }, // 34
    { productName: "Slush 20 Oz FS", metaTagDescription: "", ProductMultiEan: ["2359075"] }, // 35
    { productName: "Sope Verde FS pza", metaTagDescription: "", ProductMultiEan: ["2358842"] }, // 36
    { productName: "Stromboli Meat Lovers Mega Chef", metaTagDescription: "", ProductMultiEan: ["2358852"] }, // 37
    { productName: "Taco Cecina Enchilada", metaTagDescription: "", ProductMultiEan: ["2357315"] }, // 38
    { productName: "Taco Chuleta Ahumada", metaTagDescription: "", ProductMultiEan: ["2351223"] }, // 39
    { productName: "Taco de Bistec", metaTagDescription: "", ProductMultiEan: ["2351293"] }, // 40
    { productName: "Taco de Cecina", metaTagDescription: "", ProductMultiEan: ["2355287"] }, // 41
    { productName: "Taco de Chuleta Fresca", metaTagDescription: "", ProductMultiEan: ["2351289"] }, // 42
    { productName: "Taco De Longaniza pza", metaTagDescription: "", ProductMultiEan: ["2358843"] }, // 43
    { productName: "Taco De Pastor pza", metaTagDescription: "", ProductMultiEan: ["2358844"] }, // 44
    { productName: "TAQUITOS DORADOS PZA", metaTagDescription: "", ProductMultiEan: ["2358845"] }, // 45
    { productName: "Torta Cochinita congelada", metaTagDescription: "", ProductMultiEan: ["2358603"] }, // 46
    { productName: "Torta De Jamón pza", metaTagDescription: "", ProductMultiEan: ["2359920"] }, // 47
    { productName: "Torta de Milanesa de Pollo", metaTagDescription: "", ProductMultiEan: ["2355990"] }, // 48
    { productName: "Torta de Milanesa de Res", metaTagDescription: "", ProductMultiEan: ["2351285"] }, // 49
    { productName: "Torta de Pollo Rostizado", metaTagDescription: "", ProductMultiEan: ["2357491"] }, // 50
    { productName: "Torta De Salchicha", metaTagDescription: "", ProductMultiEan: ["2359799"] }, // 51
    { productName: "Torta Lechon RV", metaTagDescription: "", ProductMultiEan: ["2356004"] }, // 52
    { productName: "TORTILLA AMARILLA", metaTagDescription: "", ProductMultiEan: ["2503362"] }, // 53
    { productName: "TORTILLA BLANCA", metaTagDescription: "", ProductMultiEan: ["2503369"] }, // 54
    { productName: "TORTILLA TAQUERA AMARILLA", metaTagDescription: "", ProductMultiEan: ["2503328"] }, // 55
    { productName: "TORTILLA TAQUERA BLANCA", metaTagDescription: "", ProductMultiEan: ["2503361"] }, // 56
    { productName: "Tostipollo pechuga pieza", metaTagDescription: "", ProductMultiEan: ["2358351"] }, // 57
    { productName: "Tostipollo pierna o muslo", metaTagDescription: "", ProductMultiEan: ["2350264"] }, // 58
    { productName: "Vaso Slush Jumbo", metaTagDescription: "", ProductMultiEan: ["2358352"] } // 59
];
