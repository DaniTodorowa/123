function solve(a, b, c) {
    let smallest = (2 ** 53);
    if (a < smallest) {
        smallest = a;

    }
    if (b < smallest) {
        smallest = b;

    }
     if (c < smallest) {
        smallest = c;

    }
    return smallest;

}

console.log(solve(600,
    342,
    123)
)
