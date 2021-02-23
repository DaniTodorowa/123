function solve(num) {
    let days = 0;
    let total = 0;
    let startAmount = num;
    while (startAmount>= 100){
            total += startAmount;
            if (total>= 26){
                total -= 26;
            }else {
                total = 0;
            }

            days++;
            startAmount -= 10;
    }
    console.log(days);
    if (total >= 26){
        console.log(total-26);
    }else {
        console.log('0');
    }



}

solve(111)
