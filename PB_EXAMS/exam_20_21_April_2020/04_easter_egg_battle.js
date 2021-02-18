function solve(input) {
    let firstEggsCount = Number(input.shift());
    let secEggsCount = Number(input.shift());
    let command = input.shift();
    while (true) {

        if (command === 'End of battle') {
            break;
        } else {
            if (command === 'one') {
                secEggsCount--;
                if (secEggsCount === 0) {
                    console.log(`Player two is out of eggs. Player one has ${firstEggsCount} eggs left.`);
                    break;
                }
            } else if (command === 'two') {
                firstEggsCount--;
                if (firstEggsCount === 0) {
                    console.log(`Player one is out of eggs. Player two has ${secEggsCount} eggs left.`);
                    break;
                }
            }
        }
        command = input.shift();
    }
    if (firstEggsCount !== 0 && secEggsCount !== 0) {
        console.log(`Player one has ${firstEggsCount} eggs left.`);
        console.log(`Player two has ${secEggsCount} eggs left.`);
    }
}

solve([6, 3, 'one', 'two', 'two','one','one'])



//second solving
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