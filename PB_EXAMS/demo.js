function solve(input) {
    let firstEggs = Number(input.shift());
    let secEggs = Number(input.shift());
    let data = input.shift();
    let winner = "";
    let isWinner = false;
    while (data!== "End of battle" && data !==""){

        if (data==='one'){
            secEggs--;
            if (secEggs ===0){
                winner = 'Player one';
                isWinner = true;
                break;
            }
        }else {
            firstEggs --;
            if(firstEggs===0){
                winner = "Player two";
                isWinner = true;
                break;
            }
        }
        data = input.shift();
    }
    if (isWinner){
        if (winner === 'Player two'){
            console.log(`Player one is out of eggs. Player two has ${secEggs} eggs left.`);
        }else {
            console.log(`Player two is out of eggs. Player one has ${firstEggs} eggs left.`);
        }
    }else {
        console.log(`Player one has ${firstEggs} eggs left.`);
        console.log(`Player two has ${secEggs} eggs left.`);
    }


}

solve([

        '6',   '3',   'one',
        'two', 'two', 'one',
        'one', '',    '',
        '',    ''
    ]

)