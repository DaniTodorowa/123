function solve(input){
    let sums = input;
    let counter = 0;
    let totalAmount = 0;
    while (sums[counter] !== "NoMoreMoney"){

        if (Number(input[counter])< 0){
            console.log('Invalid operation!');{break;}
        }else {
            totalAmount+=Number(input[counter]);
            console.log(`Increase: ${Number(input[counter]).toFixed(2)}`);
        }
        counter++;
    }
    console.log(`Total: ${totalAmount.toFixed(2)}`);
}

solve(["120",
    "45.55",
    "-150"]
)