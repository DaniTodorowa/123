function solve(input) {
    let res = [];
    for (let i =0;i<input.length;i++){
        res[input.length-1-i] = input[i]
    }
    console.log(res.join(" "));
}

solve([ 'a', 'b', 'c', 'd', 'e' ])