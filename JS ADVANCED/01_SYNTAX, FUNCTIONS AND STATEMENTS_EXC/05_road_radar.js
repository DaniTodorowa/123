function solve(a,b) {
    let typeRoad = b;
    let speed = a;
    let diff = 0;
    let speedLimit = 0;
    let status = '';
    if (typeRoad === 'city') {

        diff = speed - 50;
        speedLimit = 50
        if (diff > 0 && diff <= 20) {
            status = 'speeding'
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 20 && diff < 40) {
            status = "excessive speeding"
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 40) {
            status = "reckless driving ";
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else{
            console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
        }

    } else if (typeRoad === 'residential') {
        speedLimit = 20;
        diff = speed - 20;
        if (diff > 0 && diff <= 20) {
            status = `speeding`
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 20 && diff < 40) {
            status = "excessive speeding";
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 40) {
            status = "reckless driving ";
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }else {
            console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    } else if (typeRoad === 'interstate') {
        speedLimit = 90;
        diff = speed - 90;
        if (diff > 0 && diff <= 20) {
            status = `speeding`;
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 20 && diff < 40) {
            status = "excessive speeding";
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 40) {
            status ="reckless driving ";
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }else {
            console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    } else if (typeRoad === 'motorway') {
        speedLimit = 130;
        diff = speed - 130;
        status = `speeding`
        if (diff > 0 && diff <= 20) {
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 20 && diff < 40) {
            status = "excessive speeding";
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (diff > 40) {
            status = "reckless driving"
            console.log( `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }else{
            console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    }
}

(solve(40, 'city'));