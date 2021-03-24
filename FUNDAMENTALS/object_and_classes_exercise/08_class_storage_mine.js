class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost =0;

    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;//Object.values(objProduct)[2]
        this.totalCost += product.price * product.quantity;

    }

    getProducts(product) {
        this.storage.forEach(p => {
            return JSON.stringify(p);
        });
    }

    // get totalCost() {
    //     let totalCost = 0;
    //     this.storage.forEach(obj => {
    //         let valuesArr = Object.values(obj);
    //         totalCost += valuesArr[1] * valuesArr[2];
    //         //console.log(sum);
    //     });
    //     return totalCost;
    // }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
