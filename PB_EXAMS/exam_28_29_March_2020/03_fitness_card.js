function solve(input) {
    let savedSum = Number(input.shift());
    let gender = (input.shift());
    let age = input.shift();
    let sport = input.shift();
    let sum = 0;
    if (gender === 'm') {
        if (sport === "Gym") {
            sum = 42;
        } else if (sport === "Boxing") {
            sum = 41;
        } else if (sport === 'Yoga') {
            sum = 45;
        } else if (sport === 'Zumba') {
            sum = 34;
        } else if (sport === 'Dances') {
            sum = 51;
        } else if (sport === 'Pilates') {
            sum = 39;
        }
    } else if (gender === 'f') {
        if (sport === "Gym") {
            sum = 35;
        } else if (sport === "Boxing") {
            sum = 37;
        } else if (sport === 'Yoga') {
            sum = 42;
        } else if (sport === 'Zumba') {
            sum = 31;
        } else if (sport === 'Dances') {
            sum = 53;
        } else if (sport === 'Pilates') {
            sum = 37;
        }
    }
    if (age <= 19) {
        sum -= sum * .2;
    }
    if (sum <= savedSum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(sum - savedSum).toFixed(2)} more.`);
    }
}
solve([20,'f',15,'Yoga'])