function solve(input) {
    let res = [];
    for (let i = 0; i < input.length; i += 2) {
        res.push((input[i]));
    }
    return res.join(" ")
}


console.log(solve(['20', '30', '40']));