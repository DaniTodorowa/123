function solve(length, k) {
    let res = [1];
    for (let i = 0; i <= length-2; i++) {
        let currArr = res.slice(Math.max(0,i-k+1), i+1)
        let currSUm = currArr.reduce((a, c) => a + c, 0);
        res.push(currSUm)
    }
    return res;
}

solve(8, 2)