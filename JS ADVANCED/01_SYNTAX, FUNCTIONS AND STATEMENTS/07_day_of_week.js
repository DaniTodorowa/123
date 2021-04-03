function solve(day) {
    let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days.includes(day) ? days.indexOf(day)+1: "error";
}

console.log(solve("M"));