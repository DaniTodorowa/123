function solve(input) {
    //console.log(input);
    let firstName = input.shift();
    let secName = input.shift();
    let isWar = false;
    let firstTl = 0;
    let secTl = 0;
    let winner = "";
    let winTl = 0;
    let data = input.shift();
    while (input.length>0 && data !== ""){

        if (data!== "End of Game"){
            let currFirst = Number(data);
            let currSec = Number(input.shift());
            if (currFirst === currSec){
                isWar = true;
                currFirst = Number(input.shift());
                currSec = Number(input.shift());
                if (currFirst>currSec){
                    winner = firstName;
                    winTl = firstTl;
                }else {
                    winner = secName;
                    winTl = secTl;
                }
                break;
            }else {
                if (currFirst>currSec){
                    firstTl += (currFirst - currSec);
                }else {
                    secTl+= (currSec - currFirst);
                }
            }
            if (!isWar){
                data = input.shift()
            }

        }else {
            break;
        }
    }
    if (isWar){
        console.log("Number wars!");
        console.log(`${winner} is winner with ${winTl} points`);
    }else {
        console.log(`${firstName} has ${firstTl} points`);
        console.log(`${secName} has ${secTl} points`);
    }


}

solve([

    'Aleks',
    'Georgi',
    '4',
    '5',
    '3',
    '2',
    '4',
    '3',
    '4',
    '4',
    '5',
    '2'



])