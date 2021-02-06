// function solve(distance, passengers, price) {
//      let neededFuel = (distance/100*7);
//     neededFuel+= passengers*.1;
//      let money = neededFuel*price;
//      let fuel = (distance*(7/100 )) + (passengers*100/1000);
//      let res = price*fuel;
//     console.log(`Needed money for that trip is ${money}lv.`);
//
// }
//
// solve(260,
// 9,
// 2.49)

function solve(a, b, c) {
    let distance = Number(a);
    let passengers = Number(b);
    let price = Number(c);
    let fuel = distance*7/100 + (passengers*100/1000);
    let res = price*fuel;
    console.log(`Needed money for that trip is ${res}lv.`);
}
solve(260,
    9,
    2.49)