function solve(input){
    let firstNum = Number(input[0]);
    let secNum = Number(input[1]);
    let magic = Number(input[2]);
    let counter = 0;
    let isFound = false;
    for (let i = firstNum;i<=secNum;i++){
        for (let j = firstNum;j<=secNum;j++){
            counter++;
            if ((j+i) === magic){
                isFound = true;
                firstNum = i;
                secNum = j;
                break;
            }
        }
        if (isFound){
            break;
    }
    }
    if (isFound){
        console.log(`Combination N:${counter} (${firstNum} + ${secNum} = ${magic})`);
    }else {
        console.log(`${counter} combinations - neither equals ${magic}`);
    }

}
solve((["88",
    "888",
    "2000"])
)