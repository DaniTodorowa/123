function solve(input) {
    let addresses = {};
    input.forEach(line=>{
        const tokens = line.split(":");
        let name = tokens[0];
        let address = tokens[1];
        addresses[name] = address;
    });
    let tuples =[];
    for (let key in addresses){
        tuples.push([key, addresses[key]])
    }
    let sortedNamesTuples = tuples.sort((a,b)=>a[0].localeCompare(b[0]));

    sortedNamesTuples.forEach(t=>{
        console.log(`${t[0]} -> ${t[1]}`);
    })
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])