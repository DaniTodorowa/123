function solve(input) {
    let budget = Number(input.shift());

    let counter = 0;
    let isEnough = false;
    let purchase = 0;
    let command = input.shift();
    while (true){
        //let command = input.shift();
        if (command === 'Stop'){
            break;

        }else {
            let currSum = Number(input.shift());
            if (currSum > budget){
                isEnough = true;
                console.log("You don't have enough money!");
                console.log(`You need ${(currSum - budget).toFixed(2)} leva!`);
                break;
            } else {
                counter++;
                if (counter%3===0){
                    currSum -= currSum*.5

                }
                purchase+=currSum;
                budget-= currSum;

            }
            command = input.shift();
        }
    }
    if (! isEnough){
        console.log(`You bought ${counter} products for ${purchase.toFixed(2)} leva.`);
    }
}

solve([54,'Backpack',.5,"Stop"])