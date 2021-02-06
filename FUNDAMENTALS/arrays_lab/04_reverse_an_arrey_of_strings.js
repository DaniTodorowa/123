function solve(input) {
    let res = []
    let num = Math.round(input.length/2);
    for (let i = 0; i< num;i++){
        res[i] = input[input.length - 1 -i];
        res[input.length -1 -i] = input[i];
    }
    console.log(res.join(' '));
}

solve(['abc', 'def', 'hig', 'klm', 'nop'])