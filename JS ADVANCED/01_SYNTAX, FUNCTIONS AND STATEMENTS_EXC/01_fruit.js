function solve(product, quantity, pricePerKilo) {
 return `I need $${(pricePerKilo*(quantity/1000)).toFixed(2)} to buy ${(quantity/1000).toFixed(2)} kilograms ${product}.`
}

console.log(solve('orange', 2500, 1.80));