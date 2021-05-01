function solve(arr=[]) {
let res = arr.sort((a,b)=>a.localeCompare(b));
res.forEach((x,i)=> console.log(`${i+1}.${x}`));
}

solve(["John", "Bob", "Christina", "Ema"])