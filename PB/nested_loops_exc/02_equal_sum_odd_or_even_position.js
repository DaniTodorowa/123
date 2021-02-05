function solve(input){
    let printLineNums = '';
    let firstNum = Number(input.shift());
    let secNum = Number(input.shift());
    let oddSum =0;
    let evenSum =0;
    let currNum =0;
    for (let i=firstNum;i<=secNum;i++){
        let currentNumStr = i.toString();
        for (let j =0;j<=5;j++){
            let currNum = Number(currentNumStr[j]);
            if (j%2 ===0 || j ===0){
                evenSum+=currNum;
            }else {
                oddSum+=currNum;
            }

        }
        if (evenSum ===oddSum){
            printLineNums +=currentNumStr + " ";
        }
        oddSum = 0;
        evenSum = 0;
        currNum = 0;

    }
    console.log(printLineNums);

}
solve(['123456','124000'])