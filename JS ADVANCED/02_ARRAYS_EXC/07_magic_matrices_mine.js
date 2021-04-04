function solve(arr = []) {
    let isMagic = true;
    let sumRow = arr[0].reduce((a, b) => (a + b), 0)
    for (let i = 1; i < arr.length; i++) {
        let currSumRow = arr[i].reduce((a, b) => (a + b), 0);
        if (currSumRow !== sumRow) {
            isMagic = false;
            break;
        }
    }

    function sumColOne(arr) {
        let sumColOne = 0
        for (let i = 0; i < arr.length; i++) {
            let currRow = arr[i];
            let currEl = currRow[0];
            sumColOne += currEl


        }
        return sumColOne;
    }


    for (let i = 1; i < arr.length - 1; i++) {
        let currSumCol = 0;

        for (let j = 0; j < arr.length; j++) {
            let currArr = arr[j];
            let currEl = currArr[i];
            currSumCol += currEl

        }
        if (currSumCol !== sumColOne(arr)) {
            isMagic = false;
            break;
        }

    }
    return (isMagic);


}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]


])