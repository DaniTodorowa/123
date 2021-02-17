function solve(input) {
    let sum = 0;
    let over20Pr = Number(input.shift());
    let kg = Number(input.shift());
    let days = Number(input.shift());
    let luggageCount = Number(input.shift());
    let pricePerOne = 0;
    if (kg < 10) {
        pricePerOne = over20Pr * .2;
    } else if (kg >= 10 && kg <= 20) {
        pricePerOne = over20Pr * .5;
    } else {
        pricePerOne = over20Pr;
    }
    if (days < 7) {
        pricePerOne *= 1.4;
    }else if(days >= 7 && days <= 30){
        pricePerOne *= 1.15;
    }else if (days > 30){
        pricePerOne *= 1.1;
    }
    sum = luggageCount*pricePerOne;
    console.log(`The total price of bags is: ${sum.toFixed(2)} lv. `);

}

solve([25.50,
    5,
    36,
    6
])