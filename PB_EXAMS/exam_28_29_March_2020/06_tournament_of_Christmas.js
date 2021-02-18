function solve(input){
    let days = Number(input.shift());
    let winCounter = 0;
    let loseCounter = 0;
    let sum = 0;
    let daySum = 0;
    let dayWinner = 0;
    for (let i=1; i<=days;i++){
        daySum = 0;
        winCounter = 0;
        loseCounter =0;
        while (true){
            let command = input.shift();
            if (command === "Finish"){
                break;
            }else {
                let sport = command;
                let result = input.shift();
                if (result==='win'){
                    daySum+=20;
                    winCounter++;
                }else {
                    loseCounter++;
                }
            }
            //command = input.shift();
        }
        if (winCounter>loseCounter){
            dayWinner++;
            sum += daySum*.1;

        }sum+=daySum;
    }
    if (dayWinner> (days/2)){
        sum+=sum*.2;
        console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`);
    }else {
        console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`);
    }
}

solve([3,
`darts`,
`lose`,
`handball`,
`lose`,
`judo`,
`win`,
`Finish`,
`snooker`,
`lose`,
`swimming`,
`lose`,
`squash`,
`lose`,
`table tennis`,
`win`,
`Finish`,
`volleyball`,
`win`,
`basketball`,
`win`,
`Finish`]
)