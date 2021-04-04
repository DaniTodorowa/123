function solve(input) {
let res = [];
let step = Number(input[input.length-1])
let arr = input.slice(0,input.length-1)
arr.forEach((x,index)=>{
    if (index % step === 0)
    res.push(x)
});
return res.join('\n')

}

console.log(solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6'


]));