function solve(arr = []) {
    let numRot = Number(arr.pop());
    for (let i = 0; i < numRot; i++) {
        arr.unshift(arr.pop());
    }

    return (arr.join(" "));
}







solve(['1',
    '2',
    '3',
    '4',
    '2'



])