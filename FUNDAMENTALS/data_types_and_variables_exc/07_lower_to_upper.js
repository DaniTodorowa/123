function solve(letter) {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
        console.log(`upper-case`);
    }else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0)<= 122){
        console.log(`lower-case`);
    }
}

solve("k")