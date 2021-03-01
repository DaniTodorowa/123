function solve(length, seq) {
    let res = [1];

    function sumCurrLessSeq(arr = []) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];

        }
        return sum;
    }

    function sum2(array) {
        let sum = 0;
        for (let k = res.length - 1; k > res.length - 1 - seq; k--) {
            sum += res[k];
        }
        return sum;
    }


    for (let i = 2; i <= length; i++) {
        if (res.length < seq) {
            let current = sumCurrLessSeq(res);
            res.push(current)
        } else {

            let curr = sum2(res);
            res.push(curr);
        }
    }
    return (res.join(' '));
}

console.log(solve(8, 2));