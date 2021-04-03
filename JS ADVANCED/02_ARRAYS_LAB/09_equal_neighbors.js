function solve(input) {
    let numArr = input.length;
    let numElRow = input[0].length;
    let counter = 0;
    for (let i =0;i<numArr-1;i++){
        let currArr = input[i];
        let nextArr = input[i+1];
        for (let j = 0;j<numElRow;j++){
            let currEl = currArr[j];
            let  nextEl = nextArr[j];
            if (currEl === nextEl){
                counter ++;
            }
        }
    }
    for (let i =0;i<numArr;i++){
        let currArr = input[i];

        for (let j = 0;j<numElRow-1;j++){
            let currEl = currArr[j];
            let  nextEl = currArr[j+1];
            if (currEl === nextEl){
                counter ++;
            }
        }
    }


    console.log(counter);

}

solve([['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']

])