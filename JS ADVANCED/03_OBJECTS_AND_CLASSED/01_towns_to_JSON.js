function solve(input) {
    let [town, latitude, longitude] = input[0].split(" ").join('').split("|").filter(Boolean);
    let towns = [];
    for (let i = 1; i < input.length; i++) {
        let current = input[i].split('|').filter(Boolean);

        let town = current[0].trim();
        let latitude = Number(Number(current[1]).toFixed(2));
        let longitude = Number(Number(current[2]).toFixed(2));

        towns.push({Town: town, Latitude: latitude, Longitude: longitude});
    }
    console.log(JSON.stringify(towns));

}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])