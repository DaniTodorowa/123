function solve(a, b,c, d) {

    let x1 = Number(a);
    let y1 = Number(b);
    let x2 = Number(c);
    let y2 = Number(d);
    let distanceTwoPoints = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distancePointCenterX1Y1 = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let distancePointCenterX2Y2 = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));

    if (Number.isInteger(distancePointCenterX1Y1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distancePointCenterX2Y2)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceTwoPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}}} is invalid`);
    }

}

solve(
    2, 1, 1, 1
)