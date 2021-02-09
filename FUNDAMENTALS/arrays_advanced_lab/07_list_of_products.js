function solve(input) {
    let res = input.sort();
    let counter = 0;

    for (let el of res){
        counter++;
        console.log(`${counter}.${el}`);
    }
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"])