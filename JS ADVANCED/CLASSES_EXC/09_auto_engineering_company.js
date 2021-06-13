function solve(arr){
    let carsObject={}
    for (let el of arr){
        const car = el.split(' | ')
        if (!carsObject[car[0]]){
            carsObject[car[0]] = {}
        }
        if (!carsObject[car[0]][car[1]]){
            carsObject[car[0]][car[1]] = 0
        }
        carsObject[car[0]][car[1]] += Number(car[2])
    }
    let result = ''
    for (let [brand, modelAndCount] of Object.entries(carsObject)){
        result += `${brand}\n`
        for (let [model, count] of Object.entries(modelAndCount)){
            result += `###${model} -> ${count}\n`
        }
    }

    return result
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);

function solving(arr) {
    let objCars = {};
    for (let el of arr) {
        let [name, model, count] = el.split(" | ");
        count = Number(count);
        if (!objCars[name]) {
            objCars[name] = {}
        }
        if (!objCars[name][model]) {
            objCars[name][model] = 0

        }
        objCars[name][model] += count
    }
    //console.log(objCars);
    let result = '';
    for(let [name, modelsAndCounts] of Object.entries(objCars)){
        result+=`${name}\n`;
        for(let [model, count] of Object.entries(modelsAndCounts)){
            result += `###${model} -> ${count}\n`
        }

    }
    return result;

}
