function solve(input) {
    let res = [];
    for (let i = 0; i< input.length; i++){
        res.push(input[i].split(', '));
    }
    console.log(res);
    let arrayNums = res.shift();
    console.log(arrayNums);
    for (let j = 0; j< res.length;j ++){
        let commandNum = res.shift();
        let command = commandNum[0].split(' ');
        console.log(command);

    }
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])