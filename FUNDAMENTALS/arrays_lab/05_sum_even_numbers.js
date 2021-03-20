function solve(input) {
    let sum = 0;

    for (let i = 0; i< input.length;i++){
        let currNum = Number(input[i])
        if (currNum % 2 === 0){
            sum+= currNum;
        }


    }
    console.log(sum);
}

solve(['1','2','3','4','5','6'])

// function solve(input) {
//     let sumEvenNums = 0;
//     let arr = input.map(x=>Number(x))
//     arr.forEach(x=>{
//         (x%2 ===0 ? sumEvenNums+= x : undefined)
//     });
//     return sumEvenNums;
//     //console.log(sumEvenNums);
// }
//
// console.log((solve(['1','2','3','4','5','6'])));