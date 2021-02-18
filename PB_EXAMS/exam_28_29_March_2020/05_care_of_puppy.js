function solve(input){
    let foodQuantity = Number(input.shift())*1000;
    let command = input.shift();
    let quantity = 0;
    let tlQuantity = 0;
    while (true){
        if (command === 'Adopted'){
            break;
        }else {
            quantity = Number(command);
            tlQuantity += quantity;

        }
        command = input.shift();
    }
    if (foodQuantity<tlQuantity){
        console.log(`Food is not enough. You need ${Math.abs(tlQuantity-foodQuantity)} grams more.`);
    }else {
        console.log(`Food is enough! Leftovers: ${Math.abs(tlQuantity-foodQuantity)} grams.`);
    }
}
solve([2,
999,
456,
999,
999,
123,
456,
'Adopted',]


)

