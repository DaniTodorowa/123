function solve(input) {
    //console.log(input);
    let result =[]
    let res = [];
    let re = /[a-zA-Z0-9]+/g
    let found = '';
    let arr = input.split(' ');
    arr.forEach(r=>{
        found = r.match(re);
        res.push(found);

    });
    //console.log(res);
    let elNew ;
    for(let el of res){
        elNew = el[0].toUpperCase();
        result.push(elNew);
    }
    console.log(result.join(", ")); // this solving gives 66/100
}
/*function wordUpperCase(input) {
    return input.toUpperCase().match(/\w+/gim).join(', ');
}*/    //100-100 in Judge

// function wordsUppercase(text) {
//     let result = text.toUpperCase()
//         .match(/\w+/g)
//         .join(', ');
//
//     console.log(result);         // 100 in Judge
// }

solve('hello')