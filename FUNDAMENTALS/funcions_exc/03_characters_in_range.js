function solve(firstChar,secChar) {
    let res = [];
    let first = Math.min(firstChar.charCodeAt(0),secChar.charCodeAt(0));
    let sec = Math.max(secChar.charCodeAt(0),firstChar.charCodeAt(0));
    for (let i = (first+1);i<sec;i++){
        let symbol = String.fromCharCode(i);
        res.push(symbol);
        //console.log(symbol);
    }
    return res.join(" ")
}

console.log((solve('C',
    '#'
)));