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
                    break;
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

solve([

        '20', 'Fill',
        '30', 'Buy',
        '15', 'Buy',
        '20', 'Close'
    ]
)

//second solving
function solve(input) {
    let eggs = Number(input.shift());
    let data = input.shift();
    let areFin = false;
    let sold = 0;
    while (data!=="Close"){
        let currEggs = Number(input.shift());
        if (data ==="Fill"){
            eggs+=currEggs;
        }else if (data==="Buy"){
            if(eggs>=currEggs){
                eggs-=currEggs;
                sold += currEggs;
            }else {
                areFin = true;
                break;
            }
        }
        data = input.shift();
    }
    if (!areFin){
        console.log(`Store is closed!`);
        console.log(`${sold} eggs sold.`);
    }else {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${eggs}.`);
    }
}