function solve(arr){
    let temp = ''
    let objJuice = {}
    let objBottle = {}
    // let arrBottles = []

    // class Bottles{
    //     constructor(juice, bottles) {
    //         this.juice = juice;
    //         this.bottles = bottles
    //     }
    // }

    for (let el of arr){
        temp = el.split('=>')
        if (!objJuice[temp[0]]){
            objJuice[temp[0]] = 0
        }
        objJuice[temp[0]] += Number(temp[1])
        if (objJuice[temp[0]]>=1000){
            if (!objBottle[temp[0]]){
                objBottle[temp[0]]=0
            }
            const bottles = Math.floor(Number((objJuice[temp[0]])/1000))
            objBottle[temp[0]] += bottles
            objJuice[temp[0]] -= bottles*1000
        }
    }


    let result = ''
    for (let [k, v] of Object.entries(objBottle)){
        // arrBottles.push(new Bottles(k,v))
        result += `${k}=> ${v}\n`
    }
    // for (let el of arrBottles){
    //     result += `${el['juice']}=> ${el['bottles']}\n`
    // }

    return result
}

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
))


function cappyJuice(input) {
    // Mask - https://git.io/JfreD
    let juice = {};
    let bottles = {};
    input.map(data => {
        let [name, volume] = data.split(' => ')
        !juice.hasOwnProperty(name) ? juice[name] = 0 : 'pass';
        let currentVolume = juice[name] + +volume;
        if (currentVolume >= 1000) {
            let juiceLeft = currentVolume % 1000;
            let bottlesToStore = (currentVolume - juiceLeft) / 1000;
            !bottles.hasOwnProperty(name) ? bottles[name] = 0 : 'pass';
            bottles[name] += bottlesToStore;
            volume = juiceLeft;
        }
        juice[name] += +volume;
    });
    for (let [juice, volume] of Object.entries(bottles)) {
        console.log(`${juice} => ${volume}`);
    }
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

);