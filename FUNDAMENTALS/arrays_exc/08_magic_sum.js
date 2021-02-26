function solve(array = [], num) {

    let magicNum = num
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1;j<array.length;j++){
            let currSum = array[i] + array[j];
            if (currSum === magicNum){
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}

solve([1, 2, 3, 4, 5, 6],
    6


)