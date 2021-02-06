function solve(num) {
    let years = num*100;
    let days = Math.round(years*365.2422);
    let hours = Math.round(days*24);
    let min = Math.round(hours*60);
    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);
}

solve(5)