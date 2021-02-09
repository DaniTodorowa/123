function solve(input) {
    let res = input.sort((a,b) => {
        return a-b;
    });
    console.log((res.slice(0,2)).join(' '));
}

solve([3, 0, 10, 4, 7, 3])