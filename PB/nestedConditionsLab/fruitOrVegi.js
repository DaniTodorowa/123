function solve(input){
    let item = input[0]
    if (item === 'banana' || item === 'apple' || item === 'kiwi' || item === 'cherry' || item === 'lemon' || item === 'grapes'){
        console.log('fruit')
    }else if(item === 'tomato' || item === "cucumber" || item === 'pepper' || item === 'carrot'){
        console.log('vegetable')
    }else {
        console.log("unknown")
    }
}

solve(['water'])
