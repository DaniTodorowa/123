function solve(input) {
    let firstNum = Number(input.pop());
    let lastNum = Number(input.shift());
    let sum = firstNum + lastNum;
    console.log(sum);
}

solve(['20', '30', '40'])