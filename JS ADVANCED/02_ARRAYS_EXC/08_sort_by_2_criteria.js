function solve(input) {
    let res = input.sort((a,b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }else {
            return a.length - b.length;
        }

    });
    console.log(res.join('\n'));
}

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
])