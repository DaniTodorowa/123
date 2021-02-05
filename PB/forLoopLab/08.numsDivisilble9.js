function solve(input){

    let sum = 0;
    let listNums = [];
    let firstNum = Number(input[0]);
    let secNum = Number(input[1]);
    for (i = firstNum; i<=secNum;i++){
        if (i % 9 === 0){
            sum += i;
            listNums.push(i);
        }
    }
    console.log(`The sum: ${sum}`);

    console.log(listNums.join("\n"));
}

solve(['100','200'])