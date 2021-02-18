function solve(input){
    let quantity = Number(input.shift());
    let command = input.shift();
    let sold = 0;
    let isSold = false;
    while (true){

        if (command === 'Close'){
            break;

        }else {
            let currentQuantity = Number(input.shift());
            if (command ==="Buy"){
                if (currentQuantity>quantity){
                    console.log("Not enough eggs in store!");
                    console.log(`You can buy only ${quantity}.`);
                    isSold = true;
                }else {
                    quantity-=currentQuantity;
                    sold+=currentQuantity;
                }
            }else if (command === 'Fill'){
                quantity+=currentQuantity;

            }
        }
        command = input.shift();
    }
    if (!isSold){
        console.log('Store is closed!');
        console.log(`${sold} eggs sold.`);
    }

}

solve(
    [20,'Close']
)

