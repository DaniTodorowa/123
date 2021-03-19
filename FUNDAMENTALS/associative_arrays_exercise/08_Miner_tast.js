function solve(input) {
    let mineObj ={};
    while (input.length>0){
        let resource = input.shift();
        let quantity = Number(input.shift());
        mineObj.hasOwnProperty(resource) ?mineObj[resource] += quantity : mineObj[resource] = quantity;
    }
    Object.keys(mineObj).forEach(x=>{
        console.log(`${x} -> ${mineObj[x]}`);
    })
}

solve(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'

])