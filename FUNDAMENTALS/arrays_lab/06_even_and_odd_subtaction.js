function solve(input) {

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i<input.length;i++){
        let currNum = Number(input[i]);
        if (currNum%2=== 0){
            evenSum+= currNum;
        }else {
            oddSum+= currNum;
        }
    }
    console.log(evenSum-oddSum);
}

solve([1,2,3,4,5,6])

// function solve(input) {
//     function evenSum(arr1){
//         let evenSum = 0;
//         arr1.forEach(x=>{
//             (x%2===0 ? evenSum+= x : undefined)
//         });
//         return evenSum;
//     }
//
//     function oddSum(arr1){
//         let oddSum = 0;
//         arr1.forEach(x=>{
//             (x%2!==0 ? oddSum+= x : undefined)
//         });
//         return oddSum;
//     }
//
//     function calcDiff(a,b){
//         return a - b;
//     }
//     // let evenSumRes = evenSum(input);
//     // let oddSumRes = oddSum(input);
//     return calcDiff(evenSum(input), oddSum(input))
// }
//
// console.log(solve([1,2,3,4,5,6]));