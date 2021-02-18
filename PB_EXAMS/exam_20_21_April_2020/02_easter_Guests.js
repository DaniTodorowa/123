function solve(input){
    let countGuest = Number(input.shift());
    let budget = Number(input.shift());
    let sum = 0;
    sum = countGuest*2*.45 + Math.ceil(countGuest/3)*4;
    if (budget>= sum){
        console.log(`Lyubo bought ${Math.ceil(countGuest/3)} Easter bread and ${countGuest*2} eggs.`);
        console.log(`He has ${(budget - sum).toFixed(2)} lv. left.`);
    }else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(sum-budget).toFixed(2)} lv. more.`);
    }
}

solve([9,12])