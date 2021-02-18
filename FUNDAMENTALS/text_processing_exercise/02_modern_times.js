function solve(input) {
    input
        .split(' ')
        .filter(word=>word.startsWith("#")&& word.length>1)
        .forEach(word =>{
            console.log((word.split("")));
        })
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')