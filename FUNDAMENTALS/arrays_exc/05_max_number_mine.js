function solve(input) {
    let res = []
    //let currentNum = input[input.length-1];
    let isCurrentMax = true;
    for (let i = 0; i < input.length; i++) {
        let isCurrentMax = true;
        let arr1 = input.slice(i + 1);
        //let maxNum = input[i]
        let currentNum = input[i]
        for (let j = 0; j < arr1.length; j++) {

            if (currentNum <= arr1[j]) {
                isCurrentMax = false;
                break
            }
        }
        if (isCurrentMax){
            res.push(currentNum)
        }

    }
    if (isCurrentMax === false){
        console.log(input[input.length-1]);
    }else {
        console.log(res.join(" "));
    }

}

solve([27, 19, 42, 2, 13, 45, 48])