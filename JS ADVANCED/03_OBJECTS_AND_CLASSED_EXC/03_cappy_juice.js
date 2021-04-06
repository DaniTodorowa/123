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