function solve(input) {
    let count = Number(input.shift());
    let totalPurchase = 0;
    let currentPurchase = 0;


    let countPurchase = 0;
    for (let i = 1; i <= count; i++) {
        let countPurchase = 0;
        let currentPurchase = 0;

        while (true) {
            let command = input.shift();
            if (command === 'Finish') {
                break;
            } else {

                let item = command;
                if (item === 'basket') {
                    countPurchase += 1;
                    currentPurchase += 1.5;
                } else if (item === 'wreath') {
                    countPurchase += 1;
                    currentPurchase += 3.8;
                } else if (item === 'chocolate bunny') {
                    countPurchase += 1;
                    currentPurchase += 7;
                }
            }
        }
        if (countPurchase % 2 === 0) {
            currentPurchase *= .8;
            totalPurchase += currentPurchase;
        } else {
            totalPurchase += currentPurchase;
        }
        console.log(`You purchased ${countPurchase} items for ${currentPurchase.toFixed(2)} leva.`);
    }
    console.log(`Average bill per client is: ${(totalPurchase / count).toFixed(2)} leva.`);
}

solve([2, 'basket', 'wreath', 'chocolate bunny', 'Finish', 'wreath', 'chocolate bunny', 'Finish'])