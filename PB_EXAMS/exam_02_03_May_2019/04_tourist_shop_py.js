function solve(input) {
    let budget = Number(input.shift());
    let command = input.shift();
    let counter = 0;
    let price = 0;
    let totalPrice = 0;
    while (command !== "Stop"){
        let current_price = Number(input.shift());
        counter++;
        if (counter%3 === 0){
            price = current_price/2;
            totalPrice +=price;
            budget-= price;
        }else {
            price = current_price;
            totalPrice += price;
            budget -= price;
        }
        if (budget<0){
            break;
        }
        command = input.shift();
    }
    //console.log(counter);
    //console.log(budget);
    if (command === "Stop"){
        console.log(`You bought ${counter} products for ${totalPrice.toFixed(2)} leva.`);
    }else {
        console.log("You don't have enough money!");
        console.log(`You need ${(Math.abs(budget)).toFixed(2)} leva!`);
    }
}

solve([54,'Backpack',64, 'Shoes',45,])