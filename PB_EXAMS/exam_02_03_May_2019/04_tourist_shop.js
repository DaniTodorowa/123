function solve(input) {
    let budget = Number(input.shift());
    let counter = 0;
    let bought = 0;
    let data = input.shift();
    let areEnough = true;
    while (data!=="Stop"){
        let currPrice = Number(input.shift());
        counter++
        if (counter%3===0){
            currPrice = currPrice*.5;
        }
        if (currPrice>budget){
            console.log(`You don't have enough money!`);
            console.log(`You need ${(currPrice-budget).toFixed(2)} leva!`);
            areEnough = false;
            break;
        }else {
            budget-=currPrice;
            bought +=currPrice;
        }
        data = input.shift();
    }
    if(areEnough){
        console.log(`You bought ${counter} products for ${bought.toFixed(2)} leva.`);
    }
}

solve([
    '54', 'Thermal underwear', '24', 'Sunscreen', '45' ]

)