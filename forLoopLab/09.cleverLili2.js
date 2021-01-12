function solve(a1, a2,a3) {
    let age = Number(a1);
    let priceWashMachine = Number(a2);
    let toyPrice = Number(a3);
    let savedMoney = 0;
    let counter = 1;
    for (i = 1; i <= age; i++) {
        if (i % 2 === 1) {
            savedMoney += toyPrice;
        } else {
            savedMoney += counter * 10 - 1;
            counter += 1

        }
    }
    if (priceWashMachine <= savedMoney) {
        console.log(`Yes! ${Math.abs(savedMoney - priceWashMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(savedMoney - priceWashMachine).toFixed(2)}`);
    }

}

solve('10', '170', '6')