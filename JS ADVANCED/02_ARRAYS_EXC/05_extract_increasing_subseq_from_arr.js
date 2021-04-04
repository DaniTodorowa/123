function solve(array=[]) {
    let extracted = [array.shift()]
    array.filter(number => {
        let biggest = Math.max(...extracted);
        number >= biggest ? extracted.push(number) : 'pass';
    })
    console.log(extracted.join('\n'));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
])