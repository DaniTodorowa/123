function solve(input) {
    let vaucherPrice = Number(input.shift());
    let data = input.shift();
    let billetCounter =0;
    let othersCounter = 0;
    let isMoney = true;
    while (data!=="End"){
        let currentValue = 0;
        if(data.length>8){
            currentValue+= data.charCodeAt(0);
            currentValue+= data.charCodeAt(1);

            if (currentValue>vaucherPrice){
                isMoney = false;
                break;
            }else {
                vaucherPrice-=currentValue;
                billetCounter++;
            }
        }else {
            currentValue = data.charCodeAt(0);
            if (currentValue>vaucherPrice){
                isMoney = false;
                break;
            }else {
                vaucherPrice-=currentValue;
                othersCounter++;
            }

        }

        data = input.shift();
    }
    console.log(`${billetCounter}`);
    console.log(`${othersCounter}`);
}

// solve([
//         '1500',
//         'Avengers: Endgame',
//         'Bohemian Rhapsody',
//         'Deadpool 2',
//         'End'
//     ]
// )