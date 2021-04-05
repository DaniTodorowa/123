function solve(input) {
    let towns = [];
input.forEach(line=>{
    let [town, count] = line.split('<->');
    !towns.hasOwnProperty(town) ? towns[town] = Number(count) : towns[town] += Number(count);

});
Object.keys(towns).forEach(x=>{
    console.log(`${x}: ${towns[x]}`);
})
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])