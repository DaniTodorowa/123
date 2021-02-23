function solve(first, operator, sec) {
    switch (operator){
        case "+":
            console.log(`${(first+sec).toFixed(2)}`);
            break;
        case "-":
            console.log(`${(first-sec).toFixed(2)}`);
            break;
        case "/":
            console.log(`${(first/sec).toFixed(2)}`);
            break;
        case "*":
            console.log(`${(first*sec).toFixed(2)}`);
            break ;
    }
}

solve(5,
    '+',
    10
)