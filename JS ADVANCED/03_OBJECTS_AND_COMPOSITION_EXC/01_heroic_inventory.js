function solve(input) {
    let heroes = [];
    input.forEach(line => {
        let [name, level, items] = line.split(" / ");
        level = Number(level)
        items = items ? items.split(", ") : [];
        heroes.push({name, level, items})


    });
    console.log(JSON.stringify(heroes));
}

solve(['Jake / 1000 / Gauss, HolidayGrenade'])