function solve(input) {

    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum = 0;
        let numStr = i.toString();
        for (let j = 0; j < numStr.length; j++) {

            sum += Number(numStr[j]);
            //console.log(sum);


        }
        // if (sum === 5 || sum === 7 || sum === 11) {
        //     console.log(`${i} -> True`);
        // } else {
        //     console.log(`${i} -> False`);
        // }
        let result = (sum === 5 || sum === 7 || sum === 11);
        console.log(result
            ? `${i} -> True`
            : `${i} -> False`
        );
    }


}

solve(15)