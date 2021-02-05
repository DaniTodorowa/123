function solve(input){
    let num = Number(input[0]);
    let currNum = 1;

    while (currNum <= num){
        console.log(currNum);
        currNum = 2*currNum +1;
    }
}

solve(['31'])