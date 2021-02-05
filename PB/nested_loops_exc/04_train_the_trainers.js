function solve(input){
    let count = Number(input.shift());
    let data = input.shift();
    let singleGrade = 0;
    let totalGrade = 0;
    let numTrainers =0;
    while (data !== 'Finish'){
        numTrainers++;
        let currentGrade = 0;
        let namePres = data;
        for (let i=1; i<=count;i++){
            currentGrade += Number(input.shift());

        }
        singleGrade = Number((currentGrade/count).toFixed(2));
        totalGrade+=currentGrade;
        console.log(`${namePres} - ${(currentGrade/count).toFixed(2)}.`);
        data = input.shift();

    }
    console.log(`Student\'s final assessment is ${(totalGrade/(numTrainers*count)).toFixed(2)}.`);
}
solve((["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
)