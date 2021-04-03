function solve(a, b) {
    for (let i = b; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
}

console.log(solve(2154, 458));