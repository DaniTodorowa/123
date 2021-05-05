function solve(input) {
let obj ={};
for (let i=0;i<input.length;i+=2) {
    let prop = input[i];
    let val = Number(input[i+1]);
    obj[prop] = val
}
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])