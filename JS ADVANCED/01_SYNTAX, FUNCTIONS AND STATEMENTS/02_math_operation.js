function solve(a,b, operator) {
    switch (operator){
        case "+": return a+b;
        case "-": return a-b;
        case "*": return a*b;
        case "/": return a/b;
        case "%": return a%b;
        default: return a** b;

    }
}

console.log(solve(5, 6, '+'));