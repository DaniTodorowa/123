function solve(len, k) {
    let sum = 0;
    let res = [1];
    for(let i= 1;i<=len-1;i++){
        let currSum = 0;
        for (let j = Math.max(i-k,0);j<i;j++){
            currSum += res[j];
        }
        res.push(currSum)


    }
    return (res.join(" "));
}

solve(8,2)