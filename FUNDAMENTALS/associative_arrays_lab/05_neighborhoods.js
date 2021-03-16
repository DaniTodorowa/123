function solve(input) {
    let neighborhoods = new Map();
    let neighborhoodsNames = input.shift().split(", ");
    neighborhoodsNames.forEach(x=>{
        neighborhoods.set(x,[]);
    });
    //console.log(neighborhoods);
    for (const line of input){
        let [neighbourhoodName, person] = line.split(" - ");
        if (neighborhoods.has(neighbourhoodName)){
            neighborhoods.get(neighbourhoodName).push(person);
        }
    }
    //console.log(neighborhoods);
    let temp = Array.from(neighborhoods.entries()) // or [...neitgborhoods.entries()]
    //console.log(temp);
    temp.sort((a,b)=>{
        return b[1].length - a[1].length
    });
    //console.log(temp);
    let result = new Map(temp);
    //console.log(result);
    for (const  [neighborhoodName, residents] of result){
        console.log(`${neighborhoodName}: ${residents.length}`);
        residents.forEach(person=> console.log(`--${person}`));
    }
}
solve(
    ['Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy']

)