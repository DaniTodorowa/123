function solve(arr = []) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currentEl = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (currentEl === arr[j]) {
                arr[j] = undefined;
            }
        }
    }
    let res = arr.filter(x => x !== undefined)
    console.log(res.join(" "));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])