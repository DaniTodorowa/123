function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName,

    };
    person.lastName = lastName;
    person['age'] = age;
    //console.log(person);

    for (let key in person){

        console.log(`${key}: ${person[key]}`);
    }

}

solve('Peter',
    'Pan',
    '20'
)