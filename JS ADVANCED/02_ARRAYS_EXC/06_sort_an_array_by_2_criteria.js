function solve(input) {
    let res = input.sort((a,b)=>{
        if (a.length>b.length){
            return 1;

        }else if ((a.length === b.length)){
            return a.localeCompare(b)
        }else {
            return -1
        }
    });
    return (res.join('\n'));
}

console.log(solve(['alpha',
    'beta',
    'gamma'




]));