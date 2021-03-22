function solve(arr1 = [], arr2 = []) {
    let counter = 0;
    let takeElNumber = arr2.shift();
    let deletingCount = arr2.shift();
    let searchedNum = arr2.shift();

    let result = arr1.splice(0,takeElNumber);
    result.splice(0,deletingCount);
    result.forEach(x=> x=== searchedNum ? counter++ : undefined);
    return `Number ${searchedNum} occurs ${counter} times.`
}

console.log(solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
));