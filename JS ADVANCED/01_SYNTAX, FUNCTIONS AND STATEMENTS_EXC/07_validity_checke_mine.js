function solve(arr =[]) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
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
    [3,0,0,4]
)