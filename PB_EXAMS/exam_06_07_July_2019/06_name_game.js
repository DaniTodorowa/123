function solve(input) {
    let command = input.shift();
    let list = [];
    let listNames = [];

    let name = '';

    while (command !== "Stop" && command!=="") {
        let currSum = 0;
        name = command;
        listNames.push(name)
        //console.log(typeof name);
        for (let i = 0; i < name.length; i++) {
            let currNum = Number(input.shift());
            if (currNum === name.charCodeAt(i)) {
                currSum += 10;
            } else {
                currSum += 2;
            }


        }
        list.push(currSum);
        command = input.shift();

    }
    if (list[0] === list[1]) {
        console.log(`The winner is ${listNames[1]} with ${list[0]} points!`);
    } else if (list[0] > list[1]) {
        console.log(`The winner is ${listNames[0]} with ${list[0]} points!`);
    } else {
        console.log(`The winner is ${listNames[1]} with ${list[1]} points!`);
    }

}

solve([
        'Pesho', '124', '34',
        '111', '97', '99',
        'Gosho', '98', '124',
        '88', '76', '18',
        'Stop'
    ]
)