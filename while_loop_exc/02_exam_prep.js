function solve(input){
    data = input;
    let failedCounterMax = Number(data[0]);
    let failedCounter = 0;
    let index = 1;
    let lastProblem = ''
    let currMark = 0;
    let needBreak = false;
    let sumGrades = 0;
    while (index<data.length){
        lastProblem = data[index];
        if (lastProblem !== "Enough") {

            currMark = Number(data[index + 1]);


            if (currMark <= 4) {
                failedCounter++;
                if (failedCounter === failedCounterMax) {
                    needBreak = true;
                    {
                        break;
                    }
                } else {
                    index += 2;

                    sumGrades += currMark;
                }
            } else {
                sumGrades += currMark;
                index += 2;


            }
        }else {
            break;
        }
    }
    if (needBreak){
        console.log(`You need a break, ${failedCounterMax} poor grades.`);
    }else {
        console.log(`Average score: ${((sumGrades/Math.trunc(index/2))).toFixed(2)}`);
        console.log(`Number of problems: ${(Math.trunc(index/2))}`);
        if (lastProblem==='Enough'){
            lastProblem = data[index-2];
            console.log(`Last problem: ${lastProblem}`);
        }else {
            console.log(`Last problem: ${lastProblem}`);
        }

    }
}

solve(['3',
    'Money',
    '6',
    'Story',
    '4',
    'Spring Time',
    '5',
    'Bus',
    '6',
    'Enough'])
