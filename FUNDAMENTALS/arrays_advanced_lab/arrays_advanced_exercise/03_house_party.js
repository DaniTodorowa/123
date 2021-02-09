function solve(input) {
    let guestsArray = [];
    while (input.length>0){
        let data = input.shift();
        let message = data.split(" ");
        name = message[0];
        if (message.length === 3){

            if (!guestsArray.includes(name)){
                guestsArray.push(name);
            }else {
                console.log(`${name} is already in the list!`);
            }
        }else {
            if (!guestsArray.includes(name)){
                console.log(`${name} is not in the list!`);
            }else {
                guestsArray= guestsArray.filter(item => item !== name);
            }

        }
    }
    for (let names of guestsArray){
        console.log(names);
    }


}
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'

])