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