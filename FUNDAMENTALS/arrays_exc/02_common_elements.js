function solve(arrayOne =[], arrayTwo = []) {

    for (let i = 0; i<arrayOne.length;i++){
        let element = arrayOne[i];
        for (let j = 0; j< arrayTwo.length;j++){
            let secEl = arrayTwo[j];

            if (element === secEl){
                console.log(element);
            }

        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)