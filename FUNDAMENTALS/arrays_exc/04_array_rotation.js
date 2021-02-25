function solve(arrOne = [], numRot) {
    for (let i = 0; i < numRot;i++){
        arrOne.push(arrOne.shift());

    }
    console.log(arrOne.join(" "));
}

solve([51, 47, 32, 61, 21], 2)