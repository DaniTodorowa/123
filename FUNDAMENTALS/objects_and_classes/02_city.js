function solve(...input) {
    //console.log(typeof input);
    let city = {};
    city.name = input.shift();
    city.area = input.shift();
    city.population = input.shift();
    city.country = input.shift();
    city.postCode = input.shift();
    //console.log(city);
    for (let key in city){
        console.log(`${key} -> ${city[key]}`);
    }
}

solve("Sofia"," 492", "1238438", "Bulgaria", "1000")