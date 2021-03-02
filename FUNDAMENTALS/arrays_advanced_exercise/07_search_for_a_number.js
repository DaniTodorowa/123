function solve(data, nums) {
    let arrayNums = data.slice(0);

    let takenNumsEl = nums[0];
    let deleteNum = nums[1];
    let searchedNum = nums[2];
    arrayNums.splice(takenNumsEl);
    arrayNums.splice(0,deleteNum)
    let res  = arrayNums.filter(a => a===searchedNum);
    //console.log(res.length);
    return `Number ${searchedNum} occurs ${res.length} times.`;


}

console.log(solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
));