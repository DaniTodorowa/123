function solve(num) {
    let res = [];
    let str = num.toString();
    let firstNum = Number(str[0]);
//let arr = str.split("");
    let sum = str
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0)
    res.push(sum / str.length === firstNum);
    res.push(sum)
    return res.join("\n")
}

console.log(solve(1234));

// function solve(input) {
//     let inputStrArr = input.toString().split("");
//     //console.log(inputStrArr);
//     let sumDigits = inputStrArr.map(Number).reduce((a,c)=>a+c,0);
//
//     if(sumDigits/inputStrArr.length === Number(inputStrArr[0])){
//         console.log("true");
//     }else {
//         console.log("false");
//     }
//     console.log(sumDigits)
// }
//
// solve(1234)