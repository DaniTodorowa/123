function solve(num, array) {
    let res = []
    for (let i = (num-1); i>=0; i--){
        res.push(array[i])
    }
    console.log(res.join(' '));
}

solve(3, [10, 20, 30, 40, 50])