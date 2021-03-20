function solve(input) {
    let index = undefined;
    let isFoundEq = false;
    function leftSum(arr) {
        return arr.reduce((a, b) => a + b);
    }

    function rightSum(arr) {
        return arr.reduce((a, b) => a + b);
    }

    for (let i = 0; i < input.length; i++) {
        let leftSumArr = 0;
        let rightSumArr = 0;

        let leftArr = input.slice(0, i);
        let rightArr = input.slice(i+1);
        if (leftArr.length !== 0) {
            leftSumArr =  leftSum(leftArr);
        } else {
            leftSumArr = 0;
        }
        if (rightArr.length !== 0) {
            rightSumArr =  rightSum(rightArr);
        } else {
            rightSumArr =  0;
        }
        if (rightSumArr === leftSumArr){

            isFoundEq = true;
            index = i;
            break;
        }

    }
    if (isFoundEq){
        console.log(index);
    }else {
        console.log("no");
    }

}


solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])