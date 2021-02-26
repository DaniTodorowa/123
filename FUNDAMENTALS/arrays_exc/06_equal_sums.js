function solve(array = []) {
    let rightSum = 0;
    let leftSum = 0;
    let areEqual = false;
    for (let i = 0; i<array.length;i++){
        let number = array[i];
        rightSum = 0;
        for (let j = (array.length-1); j>i;j--){
            let current = array[j];
            rightSum += current;

        }
        leftSum = 0;
        for (let b=0; b<i;b++){
            let current = array[b];
            leftSum += current;
        }
        if (leftSum === rightSum ){
            areEqual = true;
            console.log(i);
            break;
        }


    }
    // if (array.length ===1){
    //     console.log(0);
    // }
    if (areEqual === false){
        console.log(`no`);
    }
}

solve([1])