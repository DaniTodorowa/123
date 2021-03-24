function solve(input) {
    let meetings = {};
    input.forEach(line => {
        let tokens = line.split(" ");
        let day = tokens[0];
        let name = tokens[1];
        if (meetings[day] === undefined) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }

    });
    for (let el in meetings) {
        console.log(`${el} -> ${meetings[el]}`);
    }

}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])