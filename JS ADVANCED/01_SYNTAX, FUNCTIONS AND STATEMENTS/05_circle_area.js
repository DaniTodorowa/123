function solve(a) {

    if (typeof (a) === "number") {
        return (Math.PI * a ** 2).toFixed(2);
    } else {
        return `We can not calculate the circle area, because we receive a ${typeof a}.`
    }
}