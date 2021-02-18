function solve(input) {
    let budget = Number(input.shift());
    let litersFuel = Number(input.shift());
    let day = (input.shift());
    let isEnough = false;
    let sum = 0;
    sum = litersFuel*2.1 + 100;
    if (day === 'Saturday'){
        sum -= sum*.1;
    }else if (day === 'Sunday'){
        sum -= sum*.2;
    }
    if (sum<=budget){
        console.log(`Safari time! Money left: ${(budget-sum).toFixed(2)} lv.`);
    }else {
        console.log(`Not enough money! Money needed: ${(sum-budget).toFixed(2)} lv.`);
    }


}

solve([120,30,"Saturday"])