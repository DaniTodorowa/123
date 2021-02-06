function solve(str, n) {
    let newStr = '';
    for (let i =1; i<=n;i++){
        newStr+= str;
    }
    return newStr

}


const result = solve('abc', 3)
console.log(result);
