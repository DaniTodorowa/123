function solve(input) {
    let res = []
    for (let i = 0;i<input.length;i++){
        let currArray = input.slice(0,i)
        if (!currArray.includes(input[i])){
            res.push(input[i]);
        }
    }
    console.log(res.join(' '));

}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])