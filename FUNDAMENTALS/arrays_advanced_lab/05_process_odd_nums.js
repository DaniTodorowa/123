function solve(input) {
    let res = [];
    for (let i in input){
        if (i%2!==0){
            res.unshift(input[i]*2)
        }
    }
    console.log(res.join(' '));
}

solve([3, 0, 10, 4, 7, 3])