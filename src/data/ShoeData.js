const descriptions = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"

export function getShoeByCategory(category) {
    console.log(category)
    switch (category) {
        case "mens":
            return mensShoe;
        case "womens":
            return womensShoe;
        case "kids":
            return kidsShoe;
        default:
            return mensShoe;
    }
}

export function getShoeDetailById(id) {

    const merged = [];
    mensShoe.forEach((value => merged.push(value)));
    womensShoe.forEach((value => merged.push(value)));
    kidsShoe.forEach((value => merged.push(value)));
    let shId = parseInt(id);
    return merged.find(shoe => shoe.shoeId === shId);
}


const mensShoe = [
    {
        shoeId: 1,
        title: "STK-DR-SNEEKER",
        description: descriptions,
        price: "2000",
        image: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-2351-_2_1024x.jpg?v=1589804214",
        category: "ShoeList",
    }, {
        shoeId: 2,
        title: "GTR-DR-SNEEKER",
        description: descriptions,
        price: "7000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/848-9350-_3_1024x.jpg?v=1589804747",
        category: "ShoeList",
    }, {
        shoeId: 3,
        title: "LKM-DR-SHOE",
        description: descriptions,
        price: "6000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6349-_3_1024x.jpg?v=1589804324",
        category: "ShoeList",
    }, {
        shoeId: 4,
        title: "KT-DRR-FASHIO",
        description: descriptions,
        price: "2500",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/824-4769-a_1024x.jpg?v=1559213838",
        category: "ShoeList",
    }, {
        shoeId: 5,
        title: "BB-DR-SNEEKER",
        description: descriptions,
        price: "3000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/824-6771-d_1024x.jpg?v=1559214084",
        category: "ShoeList",
    }, {
        shoeId: 6,
        title: "FGDF-DR-SNEEKER",
        description: descriptions,
        price: "2000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/851-4533-b_46816f44-33f1-4d5e-b499-f2a362f6312c_1024x.png?v=1557122844",
        category: "ShoeList",
    }, {
        shoeId: 7,
        title: "TTK-DR-SNEEKER",
        description: descriptions,
        price: "3600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/889-6008-c_1024x.jpg?v=1578650361",
        category: "ShoeList",
    }, {
        shoeId: 8,
        title: "TTK-DR-SNEEKER",
        description: descriptions,
        price: "3600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/818-1189-c_1024x.JPG?v=1561373382",
        category: "ShoeList",
    }, {
        shoeId: 9,
        title: "NNK-DR-SNEEKER",
        description: descriptions,
        price: "9000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/853-6061-b_bc2476af-04a6-4489-94af-1673f164cae0_1024x.png?v=1557122832",
        category: "ShoeList",
    }, {
        shoeId: 10,
        title: "TTK-DR-SNEEKER",
        description: descriptions,
        price: "1600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/882-4095-b_1024x.jpg?v=1578465104",
        category: "ShoeList",
    }, {
        shoeId: 11,
        title: "CC-DR-SNEEKER",
        description: descriptions,
        price: "3800",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/882-6086-b_1024x.jpg?v=1578465238",
        category: "ShoeList",
    }, {
        shoeId: 12,
        title: "TYV-DR-SNEEKER",
        description: descriptions,
        price: "7600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/824-6316-_3_1024x.jpg?v=1593155231",
        category: "ShoeList",
    }];
const womensShoe = [
    {
        shoeId: 21,
        title: "TRE-DR-SNEEKER",
        description: descriptions,
        price: "1000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/528-9006-b_1024x.jpg?v=1570773473",
        category: "Womens",
    }, {
        shoeId: 22,
        title: "JID-DR-SIZE",
        description: descriptions,
        price: "7000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/518-5168-a_1024x.jpg?v=1558339343",
        category: "Womens",
    }, {
        shoeId: 23,
        title: "LKM-DR-SHOE",
        description: descriptions,
        price: "6000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/528-5019-b_1024x.jpg?v=1575970874",
        category: "Womens",
    }, {
        shoeId: 24,
        title: "KT-DRR-FASHIO",
        description: descriptions,
        price: "3500",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/528-2016-b_1024x.jpg?v=1575633360",
        category: "Womens",
    }, {
        shoeId: 25,
        title: "BB-DR-SNEEKER",
        description: descriptions,
        price: "3000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/502-2028-b_1024x.jpg?v=1575526428",
        category: "Womens",
    }, {
        shoeId: 26,
        title: "FGDF-DR-SNEEKER",
        description: descriptions,
        price: "2000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/502-8028-b_1024x.jpg?v=1576144117",
        category: "Womens",
    }, {
        shoeId: 27,
        title: "TTK-DR-SNEEKER",
        description: descriptions,
        price: "3600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/502-5045-b_1024x.jpg?v=1576141935",
        category: "Womens",
    }, {
        shoeId: 28,
        title: "TTK-DR-SNEEKER",
        description: descriptions,
        price: "3600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/502-6039-b_1024x.jpg?v=1576142376",
        category: "Womens",
    }, {
        shoeId: 29,
        title: "NNK-DR-SNEEKER",
        description: descriptions,
        price: "1000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/508-7007-b_1024x.jpg?v=1575633197",
        category: "Womens",
    }, {
        shoeId: 30,
        title: "DD-DR-SNEEKER",
        description: descriptions,
        price: "1400",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/528-9007-b_1024x.jpg?v=1575633464",
        category: "Womens",
    }, {
        shoeId: 31,
        title: "CC-DR-SNEEKER",
        description: descriptions,
        price: "1800",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/528-9016-b_1024x.jpg?v=1575634159",
        category: "Womens",
    }, {
        shoeId: 32,
        title: "TYV-DR-SNEEKER",
        description: descriptions,
        price: "7600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/551-6235-b_1024x.jpg?v=1588363116",
        category: "Womens",
    }];
const kidsShoe = [
    {
        shoeId: 41,
        title: "PPD-DR-SNEEKER",
        description: descriptions,
        price: "1000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6115-b_1024x.jpg?v=1583305061",
        category: "Kids",
    }, {
        shoeId: 42,
        title: "PMD-DR-SIZE",
        description: descriptions,
        price: "2999",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/351-6128-c_1024x.jpg?v=1583305144",
        category: "Kids",
    }, {
        shoeId: 43,
        title: "LKM-DR-SDOO",
        description: descriptions,
        price: "7890",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/321-6083-c_1024x.jpg?v=1561726292",
        category: "Kids",
    }, {
        shoeId: 44,
        title: "DB-DRR-FASHIO",
        description: descriptions,
        price: "8800",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/321-6146-c_1024x.jpg?v=1583304917",
        category: "Kids",
    }, {
        shoeId: 45,
        title: "BB-SDSD-SNEEKER",
        description: descriptions,
        price: "3300",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/461-6530-b_1024x.jpg?v=1589190635",
        category: "Kids",
    }, {
        shoeId: 46,
        title: "TEER-DR-SNEEKER",
        description: descriptions,
        price: "2100",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/461-4717-c_1024x.jpg?v=1589190549",
        category: "Kids",
    }, {
        shoeId: 47,
        title: "TTK-DR-SNEEKER",
        description: descriptions,
        price: "1200",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/361-2585-c_1024x.jpg?v=1589055376",
        category: "Kids",
    }, {
        shoeId: 48,
        title: "TTK-OPK-SNEEKER",
        description: descriptions,
        price: "3600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/461-9897-c_1024x.jpg?v=1588933695",
        category: "Kids",
    }, {
        shoeId: 49,
        title: "NNK-DR-SNEEKER",
        description: descriptions,
        price: "1000",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/461-9718-c_1024x.jpg?v=1588930062",
        category: "Kids",
    }, {
        shoeId: 50,
        title: "DD-DR-SNEEKER",
        description: descriptions,
        price: "1400",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/461-9717-c_1024x.jpg?v=1588930025",
        category: "Kids",
    }, {
        shoeId: 51,
        title: "CC-DR-SNEEKER",
        description: descriptions,
        price: "1800",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/361-9583-c_1024x.jpg?v=1588677426",
        category: "Kids",
    }, {
        shoeId: 52,
        title: "TYV-DR-SNEEKER",
        description: descriptions,
        price: "7600",
        image: "//cdn.shopify.com/s/files/1/0143/1552/0054/products/361-6080-c_1024x.jpg?v=1588362382",
        category: "Kids",
    }];