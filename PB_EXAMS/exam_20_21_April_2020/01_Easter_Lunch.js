function solve(input){
    let easterCake = Number(input.shift());
    let eggs = Number(input.shift());
    let cookieskg = Number(input.shift());
    let sum = easterCake*3.2 + eggs* 4.35 + cookieskg*5.4 + eggs*12*.15;
    console.log(sum.toFixed(2));
}

solve([2,3,2])