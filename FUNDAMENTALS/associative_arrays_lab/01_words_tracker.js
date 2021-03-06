function solve(input) {
    let words = {};
    let targetWords = input.shift().split(" ");
    targetWords.forEach(word => words[word] = 0);
    //console.log(targetWords);
    input.forEach(word=>{
        if (words.hasOwnProperty(word)){
            words[word]++;
        }
    })


    Object.entries(words).sort((a,b)=>b[1] - a[1]).forEach(entry=>{
        console.log(`${entry[0]} - ${entry[1]}`);
    });

}

solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])