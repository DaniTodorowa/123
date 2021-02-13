function solve(input, word) {
    let wordForReplace = "*".repeat(word.length);
    let res = input;
    while (res.includes(word)){ //or res.indexOf(word)>-1
         res = res.replace(word,wordForReplace);

    }

    console.log(res);
}
solve("A small sentence with some words small", "small")