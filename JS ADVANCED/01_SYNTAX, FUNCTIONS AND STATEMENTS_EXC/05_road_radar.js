function solve(input) {
    let typeRoad = input[1];
    let speed = input[0];
    let diff = 0;
    if (typeRoad === 'city') {
        diff = speed - 50;
        if (diff > 0 && diff <= 20) {
            return `speeding `;
        } else if (diff > 20 && diff < 40) {
            return "excessive speeding";
        } else if (diff > 40) {
            return "reckless driving ";
        }

    } else if (typeRoad === 'residential') {
        diff = speed - 20;
        if (diff > 0 && diff <= 20) {
            return `speeding `;
        } else if (diff > 20 && diff < 40) {
            return "excessive speeding";
        } else if (diff > 40) {
            return "reckless driving ";
        }
    } else if (typeRoad === 'interstate') {
        diff = speed - 90;
        if (diff > 0 && diff <= 20) {
            return `speeding `;
        } else if (diff > 20 && diff < 40) {
            return "excessive speeding";
        } else if (diff > 40) {
            return "reckless driving ";
        }
    } else if (typeRoad === 'motorway') {
        diff = speed - 130;
        if (diff > 0 && diff <= 20) {
            return `speeding `;
        } else if (diff > 20 && diff < 40) {
            return "excessive speeding";
        } else if (diff > 40) {
            return "reckless driving ";
        }
    }
}

console.log(solve([200, 'motorway']));