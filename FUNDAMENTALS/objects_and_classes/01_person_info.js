function solve(input) {
    let person = {
        firstName: input.shift(),

    };
    person.lastName = input.shift();
    person['age'] = input.shift();
    //console.log(person);

    for (let key in person){
        console.log(`${key}: ${person[key]}`);
    }

}

solve(['Peter',
    'Pan',
    '20']
)