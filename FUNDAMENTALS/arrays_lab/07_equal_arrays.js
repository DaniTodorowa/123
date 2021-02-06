function solve(firstStr, secStr) {
    let sum = 0;
    let index = 0;
    let areIdentic = true;
    for (let i =0; i<firstStr.length;i++){
        let currNum = Number(firstStr[i]);
        if (currNum ===  Number(secStr[i])){
            sum+= currNum;
        }else {
            index = i;
            areIdentic = false;
            break;
        }
    }
    if (!areIdentic){
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['1'], ['10'])