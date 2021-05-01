function solve(arr=[]) {
    let res = arr.sort((a,b)=> a-b);
    let result =[]
    while (arr.length){
        result.push(res.shift());
        result.push(res.pop());
    }
    return (result.filter(x=>x!==undefined));
}