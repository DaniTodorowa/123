function solve(input) {
    let counter = 0;
    let sumPurchase =0;
    let budget = Number(input.shift());
    let curr_sum = 0;
    let command = (input.shift());
    while (command !== "Stop"){
        curr_sum = Number(input.shift());
        if (curr_sum > budget){
            break;
        }else {
            counter++;
            if (counter%3 ===0){
                curr_sum -= curr_sum*.5
            }
            budget-=curr_sum;
            sumPurchase+=curr_sum;
        }
        command = input.shift();
    }
    if (curr_sum > budget){
        console.log(`You don't have enough money!`);
        console.log(`You need ${(curr_sum-budget).toFixed(2)} leva!`);
    }else {
        console.log(`You bought ${counter} products for ${sumPurchase.toFixed(2)} leva.`);
    }

}
solve([153.2,'Backpack',25.2, 'Shoes',54,'Sunglasees',30,'Stop'])