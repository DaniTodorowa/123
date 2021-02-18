function solve(input){
    let minutes = Number(input.shift());
    let countWalking = Number(input.shift());
    let isEnough = false;
    let totalCalories = Number(input.shift());
    let calories = 0;
    calories = countWalking*minutes*5;
    if (calories*2 >=totalCalories){
        isEnough = true;
    }
    if (isEnough){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${calories}.`);
    }else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${calories}.`);
    }

}

solve([15,2,500])