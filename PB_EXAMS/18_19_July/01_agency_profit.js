function solve(input) {
    let profit = 0;
    let nameAg = input.shift();
    let aCount = Number(input.shift());
    let kCounts = Number(input.shift());
    let aPrice = Number(input.shift());
    let kPrice = aPrice * .3;
    let tax = Number(input.shift());
    profit = (aCount*(aPrice + tax)) + ((kPrice + tax)*kCounts);
    profit *= .2;
    console.log(`The profit of your agency from ${nameAg} tickets is ${profit.toFixed(2)} lv.`);



}

solve(['WizzAir',
15,
5,
120,
40]
)