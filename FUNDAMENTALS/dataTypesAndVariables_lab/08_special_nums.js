function solve(num) {


    for (let i = 1; i<=num;i++){
        let sumDigit = 0;
        let digit = i.toString();
        for (let j = 0; j<digit.length; j++){
            sumDigit+= Number(digit[j]);

        }
        let special = sumDigit === 5 || sumDigit === 7 || sumDigit === 11;
        console.log(special ? `${i} -> True` : `${i} -> False`);

    }
}

solve(15)