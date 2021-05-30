function solve(arr) {

    let res =[]
    let firstData = arr.shift().split("|").filter(x => x !== "|" && x !== "").map(x => x.trim());
    let [Town, Latitude, Longitude] = firstData;
    for(let el of arr){
        let obj = {};
        let data = el.split("|").filter(el => el !== "|" && el !== "").map(x => x.trim());

        obj[Town]= data[0];

        obj[Latitude]= Number(Number(data[1]).toFixed(2));

        obj[Longitude]= Number(Number(data[2]).toFixed(2));

        res.push(obj);
    }
    return JSON.stringify(res);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

// function townsToJSON(input) {
//     let result = [];
//     let headings = input
//         .shift()
//         .split("|")
//         .map((el) => el.trim())
//         .filter((el) => el.length > 0);
//     for (let line of input) {
//         let temp = {};
//         line = line
//             .split("|")
//             .map((el) => el.trim())
//             .filter((el) => el.length > 0);
//         for (let index in line) {
//             index = Number(index);
//             let lol;
//             if (!isNaN(line[index])) {
//                 lol = Math.round(Number(line[index]) * 100) / 100;
//             } else {
//                 lol = line[index];
//             }
//             temp[headings[index]] = lol;
//         }
//         result.push(temp);
//     }
//     return JSON.stringify(result);
// }

// function townsToJSON(array) {
//
//     array.shift();
//     return JSON.stringify(
//         array.map(line => {
//             [Town, Latitude, Longitude] = line
//                 .split(/\| | \| | \|/g)
//                 .filter(x => x !== '')
//                 .map(x => isNaN(x) ? x : Number(Number(x).toFixed(2)));
//             return {
//                 Town,
//                 Latitude,
//                 Longitude,
//             }
//         }));
// }