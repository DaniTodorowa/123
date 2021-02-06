function solve(input) {

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i<input.length;i++){
        let currNum = Number(input[i]);
        if (currNum%2=== 0){
            evenSum+= currNum;
        }else {
            oddSum+= currNum;
        }
    }
    console.log(evenSum-oddSum);
}

solve([1,2,3,4,5,6])