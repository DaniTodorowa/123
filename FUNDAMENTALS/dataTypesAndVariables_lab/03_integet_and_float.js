function solve(first, sec, third) {
    let sum = first + sec + third;
    sum % 1 === 0 ? sum+= ' - Integer': sum += ' - Float';
    console.log(sum);
}

solve(9, 100, 1.1)