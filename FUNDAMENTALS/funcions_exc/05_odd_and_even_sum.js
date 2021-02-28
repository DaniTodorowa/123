function solve(num) {
 let oddSum = 0;
 let evenSum = 0;
 let numStr = num.toString()
    for (let el of numStr){
        if (Number(el) % 2 === 0){
            evenSum += Number(el);
        }else {
            oddSum += Number(el);
        }
    }
    return  `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

console.log(solve(1000435));