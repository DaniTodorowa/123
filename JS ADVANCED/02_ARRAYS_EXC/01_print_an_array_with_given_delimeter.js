function solve(input) {

    let delimiter = input[input.length-1];
    let arr = input.slice(0, input.length-1)
    return arr.join(`${delimiter}`)
}

console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'

]));