function solve(input) {
    let obj ={};
    input.forEach(line=>{
        let [item, price] = line.split(" : ");
        let firstLetter = item[0];
        !firstLetter.hasOwnProperty(obj) ? obj[firstLetter] = {[item]: price}: 'pass';
    });
    console.log(obj);
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']

)