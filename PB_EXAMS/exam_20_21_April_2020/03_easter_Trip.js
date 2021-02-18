function solve(input) {
    let destination = input.shift();
    let period = input.shift();
    let nights = Number(input.shift());
    let sum = 0;
    if (destination === "France") {
        if (period === "21-23") {
            sum = nights * 30;
        } else if (period === '24-27') {
            sum = nights * 35;
        } else if (period === '28-31') {
            sum = nights * 40;
        }
    } else if (destination === 'Italy') {
        if (period === "21-23") {
            sum = nights * 28;
        } else if (period === '24-27') {
            sum = nights * 32;
        } else if (period === '28-31') {
            sum = nights * 39;
        }
    } else if (destination === 'Germany') {
        if (period === "21-23") {
            sum = nights * 32;
        } else if (period === '24-27') {
            sum = nights * 37;
        } else if (period === '28-31') {
            sum = nights * 43;
        }
    }

    console.log(`Easter trip to ${destination} : ${sum.toFixed(2)} leva.`);

}

solve([`France`,'28-31',8])