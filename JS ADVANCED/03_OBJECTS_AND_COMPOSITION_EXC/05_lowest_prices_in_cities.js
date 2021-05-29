function lowestPrice(array) {
    let obj = {};
    for (const line of array) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        obj[product] ? obj[product][town] = price : obj[product] = { [town]: price };
    }
    for (const key in obj) {
        let sorted = Object.entries(obj[key]).sort((a,b) => a[1] - b[1]);
        console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

// function lowestPricesInCities(input) {
//     let products = new Map();
//
//     for (let priceList of input) {
//         const [town, product, price] = priceList.split(/\s+|\s+/g);
//
//         if (!products.has(product)){
//             products.set(product, new Map());
//         }
//
//         products.get(product).set(town, Number(price));
//     }
//
//     for (let [keyProduct, valueTownPrice] of products) {
//         let minPrice = Number.MAX_VALUE;
//         let minPriceTown = '';
//
//         for (let [town, price] of valueTownPrice) {
//
//             if (price < minPrice) {
//                 minPrice = price;
//                 minPriceTown = town;
//             }
//         }
//
//         console.log(${keyProduct} -> ${minPrice} (${minPriceTown}));
//     }
// }