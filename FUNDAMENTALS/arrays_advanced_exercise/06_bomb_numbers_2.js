function solve(arr, bomb) {
    let output = arr.splice(0);
    let bombNum = bomb[0];
    let countDetonate = bomb[1];
    while (output.includes(bombNum)){
        let bombIndex = output.indexOf(bombNum);
        let startIndex = Math.max(bombIndex-countDetonate,0);
        output.splice(bombIndex,countDetonate+1);
        output.splice(startIndex,countDetonate);


    }
    return output.reduce((a,b)=>a+b,0);
}

console.log((solve([1, 2, 2, 4, 2, 2, 2, 9],
        [4, 2])
));