function solve(input) {
    let copy = input.slice();
    let train = copy[0].split(' ').map(makeNumber);
    let maxCapacity = Number(copy[1]);
    let commands = copy.slice(2);

    for (let command of commands){
        let commandInfo = command.split(' ');
        if (commandInfo.length ===2){
            let wagon = Number(commandInfo[1])
            train.push(wagon);
        }else {
            let passangers = Number(commandInfo[0]);
            for (let wagon in train){
                let currentPassengers = train[wagon];
                if ((passangers + currentPassengers)<= maxCapacity){
                    train[wagon] += passangers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));

    function makeNumber(element) {
        return Number(element)
    }

}

solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'

])