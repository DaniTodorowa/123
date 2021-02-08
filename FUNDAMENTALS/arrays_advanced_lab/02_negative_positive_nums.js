function solve(input) {
    let res = [];
    while (input.length>0){
        let current = (input.shift());
        if (current< 0){
            res.unshift(current);
        }else {
            res.push(current);
        }
    }
    for (const number of res){
        console.log(number);
    }

}

solve([3, -2, 0, -1])