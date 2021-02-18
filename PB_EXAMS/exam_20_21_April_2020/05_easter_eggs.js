function solve(input) {
    let totalEggs = Number(input.shift());
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let max = 0;
    let maxColour = '';

    for (let i = 1; i <= totalEggs; i++) {
        let currentEgg = (input.shift());
        if (currentEgg === 'red') {
            red++;
        } else if (currentEgg === 'orange') {
            orange++;
        } else if (currentEgg === 'blue') {
            blue++;
        } else if (currentEgg === 'green') {
            green++;
        }


    }
    if (red > max) {
        max = red;
        maxColour = 'red';
    }
    if (green > max) {
        max = green;
        maxColour = 'green';
    }
    if (blue > max) {
        max = blue;
        maxColour = 'blue';
    }
    if (orange > max) {
        max = orange;
        maxColour = 'orange';
    }


    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${max} -> ${maxColour}`);
}
solve([7, 'orange','blue','green','green','blue','red','green'])
