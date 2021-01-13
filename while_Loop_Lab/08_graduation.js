function solve(input){
    let data = input;
    let index = 1;
    let failedCounter = 0;
    let name = input[0];
    let grade = 0;
    let sumGrades = 0;
    let isFailed = false;
    while (index<13){
        if (Number(data[index]) >=4){
            sumGrades+=Number(data[index]);
            grade++;
            index++

        }else {
            failedCounter++;
            if (failedCounter===2){
                isFailed = true
                {break}
            }else {
                grade++;
                index++
            }
        }
    }
    if (isFailed === true){
        console.log(`${name} has been excluded at ${grade} grade`);
    }else {
        console.log(`${name} graduated. Average grade: ${(sumGrades/12).toFixed(2)}`);
    }

}
solve((["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
)