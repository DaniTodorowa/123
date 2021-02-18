function solve(input){
    let capacity = Number(input.shift());
    let command = input.shift();
    let totalBaggage = 0;
    let countSuitcases = 0;
    let isOverloaded = false;
    while (true){
        if (command === "End"){
            break;
        }else{
            let baggage = Number(command);
            countSuitcases++;
            totalBaggage+=baggage;
            if (totalBaggage>=capacity){
                countSuitcases-=1;
                isOverloaded = true;
                break;
            }
        }
        command = input.shift();
    }
    if (!isOverloaded){
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${countSuitcases} suitcases loaded.`);
    }else {
        console.log(`No more space!`);
        console.log(`Statistic: ${countSuitcases} suitcases loaded.`);
    }


}
solve([1200.2,
    260,
    380.5,
    125.6,
    305,
    'End'
])