function solve(input){
    let countGuests = Number(input.shift());
    let pricePerGuest = Number(input.shift());
    let budget = Number(input.shift());
    let sum = 0;
    let cake = budget*.1;
    if (countGuests >= 10 && countGuests <=15){
        sum = countGuests*pricePerGuest*.85 + cake;
    }else if(countGuests>15 && countGuests<=20){
        sum = countGuests*pricePerGuest*.8 + cake;
    }else if(countGuests>20){
        sum = countGuests*pricePerGuest*.75 + cake;
    }else {
        sum = countGuests*pricePerGuest + cake;
    }
    if (budget >= sum){
        console.log(`It is party time! ${(budget-sum).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(Math.abs(budget-sum)).toFixed(2)} leva needed.`);
    }

}

solve([18, 30, 450])