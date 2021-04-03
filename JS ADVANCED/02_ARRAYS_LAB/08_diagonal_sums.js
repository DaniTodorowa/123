function solve(arr = []) {
    let res =[];
    let n = arr.length;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0;i<n;i++){
        let currArr = arr[i];
        let currEl = currArr[i];
        leftSum += currEl;
        rightSum += currArr[currArr.length - i -1]
    }
    res.push(leftSum);
    res.push(rightSum);
    return res.join(" ")

}

console.log(solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])

)