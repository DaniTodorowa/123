function solve(input) {
    let firsEl = [];
    let lastEl = [];
    let k = input.shift();
    for (let i =0; i<k; i++){
        firsEl.push(input[i]);
    }
    for (let j = input.length-1; j>=(input.length-k); j--){
        lastEl.unshift(input[j]);
    }
    console.log(firsEl.join(' '));
    console.log(lastEl.join(' '));
}

solve([3,
    6, 7, 8, 9

])