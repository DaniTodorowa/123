function solve(input) {
    let data = undefined;
    let guests = [];
    let name = "";
    while (input.length > 0) {
        data = input.shift().split(" ");
        name = data[0];
        if(data.length===3){

            if(!guests.includes(name)){
                guests.push(name);
            }else {
                console.log(`${name} is already in the list!`);
            }
        }else {
            if(!guests.includes(name)){
                console.log(`${name} is not in the list!`);
            }else {
                let index = guests.indexOf(name);
                guests.splice(index, 1)
            }

        }
    }
    return (guests.join('\n'));
}

solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'

])