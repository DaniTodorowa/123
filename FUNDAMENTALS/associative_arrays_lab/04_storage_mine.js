function solve(input) {
    let map = new Map();
    input.forEach(line=>{
        let tokens = line.split(" ");
        let name = tokens[0];
        let quantity = Number(tokens[1]);
        if (map.has(name)){
            let oldQ = map.get(name);
            map.set(name, (oldQ + quantity));
        }else {
            map.set(name, quantity)
        }
    });
    Array.from(map).forEach(el=>{
        console.log(`${el[0]} -> ${el[1]}`);
    })
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])