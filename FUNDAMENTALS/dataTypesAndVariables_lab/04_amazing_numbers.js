function solve(num) {
    let sum = 0;
    let digit = num.toString();
    for (let i = 0; i < digit.length; i++) {
        sum += Number(digit[i]);


    }
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}

solve(1233)