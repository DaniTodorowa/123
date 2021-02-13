function solve(wantedWords, text) {
    let words = wantedWords.split(", ");
    words.forEach((word)=>{
        let asterixs = '*'.repeat(word.length);
        text = text.replace(asterixs, word);
    });
    console.log(text);
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'

)

