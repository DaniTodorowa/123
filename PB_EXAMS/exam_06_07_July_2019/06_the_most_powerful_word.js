function solve(input) {
    let maxWord = '';
    let maxSum = 0;
    let data = input.shift();
    let list = ['a', 'e', 'i', 'o', 'u', 'y' ,'A','E',"I","O","U","Y"]
    while (data !== 'End of words' && data !== "") {
        let currSum = 0;
        for (let i = 0; i < data.length; i++) {
            currSum+= data.charCodeAt(i);

        }
        if (list.includes(data[0])){
            currSum*= data.length;
        }else currSum= Math.floor(currSum/data.length);
        if (currSum>maxSum){
            maxSum = currSum;
            maxWord = data;
        }
        data = input.shift();

    }
    //console.log(maxWord);
    //console.log(maxSum);
    console.log(`The most powerful word is ${maxWord} - ${maxSum}`);
}

solve(
    [ 'But', 'Some', 'People', 'Say', "It's", 'LOVE', 'End of words' ]

)