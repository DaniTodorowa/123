function solve(input) {
    let failedCounter = 0;
    let succCounter = 0;
    let gainHigh = Number(input.shift());
    let jumpCounter = 0;
    let data = input.shift();
    let startHigh = gainHigh - 30;
    let isWin = false;
    let isLost3Failed = false;
    let maxHigh = 0;
    while (input.length>0 && data!=="" && !isWin){

        for(let i = 0;i<3;i++){
            let currHigh = Number(data);
            if (currHigh>gainHigh){
                maxHigh = currHigh;
                succCounter++;
                isWin = true;
                break;
            }else if(currHigh>startHigh){
                maxHigh = currHigh;
                startHigh += 5;
                succCounter ++;
                data = input.shift();
            }else {
                maxHigh=currHigh;
                failedCounter++;
                if (failedCounter===3){
                    isLost3Failed = true;
                    break;
                }else {
                    data = input.shift();
                }
            }
        }
    }
    if (isWin){
        console.log(`Tihomir succeeded, he jumped over ${gainHigh}cm after ${succCounter+failedCounter} jumps.`);
    }else if(isLost3Failed){
        console.log(`Tihomir failed at ${maxHigh}cm after ${succCounter+failedCounter-1} jumps.`);


    }else {
        console.log(`Tihomir failed at ${maxHigh}cm after ${succCounter+failedCounter-1} jumps.`);
    }
}

solve([

        '250', '225', '224',
        '225', '228', '231',
        '235', '234', '235',
        ''

])