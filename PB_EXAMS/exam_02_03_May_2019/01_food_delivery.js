function solve(input) {
    let chickenCount = Number(input.shift());
    let fishCount = Number(input.shift());
    let vegiCount = Number(input.shift());
    let sum = 0;
    sum = chickenCount*10.35 + fishCount*12.40 + vegiCount*8.15
    sum += sum*.2
    sum+=2.5
    console.log(`Total: ${sum.toFixed(2)}`);
}

solve([10,0,6])