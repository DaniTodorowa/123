function solve(input,word) {
    let count = 0;
    let text = input.split(' ');
    for (let el of text){
        if (el === word){
            count++;
        }



    }
    console.log(count);
}

solve("This is a word and it also is a sentence",
    "is"
)