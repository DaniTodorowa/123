function solve(a,b,c) {
    let res = [];
    res.push(Math.floor(a.length + b.length + c.length));
    res.push(Math.floor((a.length + b.length + c.length)/3));
    return res.join(`\n`);
}

console.log(solve('chocolate', 'ice cream', 'cake'));

// function solve(...params) {
//     let total = params.reduce((a,c)=> a + c.length, 0);
//     console.log(total);
//     console.log(Math.floor(params.length));
// }
// solve('chocolate', 'ice cream', 'cake')