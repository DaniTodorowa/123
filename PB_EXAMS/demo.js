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

solve([

        '20', 'Fill',
        '30', 'Buy',
        '15', 'Buy',
        '20', 'Close'
    ]
)