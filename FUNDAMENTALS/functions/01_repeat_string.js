function solve(str, n) {
    let newStr = '';
    for (let i =1; i<=n;i++){
        newStr+= str;
    }
    return newStr;

}


let newStr = solve('ab', 2)
console.log(newStr);
