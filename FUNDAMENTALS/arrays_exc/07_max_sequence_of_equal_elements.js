function solve(array =[]) {
    let maxArr = [];
    let currMax = [];
    let allMaxArrays = [];
    let maxRes = [];
    for (let i = 0; i<array.length;i++){
        currMax = [];
        let currEl = array[i];
        let nextEx = array[i+1];
        if (currEl === nextEx){
            currMax.push(currEl);
            currMax.push(nextEx);
            for (let j = i +2 ; j<array.length;j++){
                if ( array[j] === currEl){
                    currMax.push(array[j]);
                }else {
                    break;
                }

            }
            if (currMax.length >= maxArr.length){
                maxArr = currMax;
                allMaxArrays.push(maxArr);
            }


        }

        //currMax = [];
    }
    for (let k = 0; k<allMaxArrays.length;k++){
        maxRes = allMaxArrays[0];
        if (allMaxArrays[k].length> maxRes.length){
            maxRes = allMaxArrays[k];
            break;
        }
    }

    console.log(maxRes.join(" "));


}

solve([4, 4, 4, 4])