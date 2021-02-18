function solve(input) {
    let capacity = Number(input.shift());
    let data =(input.shift());
    let profit = 0;
    let isFull = false;
    let tlCount = 0;
    while (data!== "Movie time!"){
        let currentEntry = Number(data);
        if (capacity>=currentEntry){
            capacity-= currentEntry;
            tlCount += currentEntry;
            let currSum = 5* currentEntry;
            if (currentEntry % 3 ===0){

                profit += currSum - 5;
            }else {
                profit += currSum;
            }

        }else {
                isFull = true;
                break;
        }
        data = input.shift();
    }
    if(isFull){
        console.log("The cinema is full.");

    }else {
        console.log(`There are ${capacity} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${profit} lv.`);
}

solve([
    '50',
    '15',
    '10',
    '10',
    '15',
    '5'

])