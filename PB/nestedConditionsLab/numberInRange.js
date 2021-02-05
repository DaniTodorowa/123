function solve(input){
    let num = Number(input[0])
    if (num !== 0 && num <= 100 && num >= -100){
        console.log('Yes')
    }else {
        console.log("No")
    }
}

solve(['0'])