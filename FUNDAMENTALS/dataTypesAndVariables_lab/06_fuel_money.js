function solve(distance, passengers, price) {
    let neededFuel = (distance/100*7);
    neededFuel+= passengers*.1;
    let money = neededFuel*price;
    //  let fuel = (distance*(7/100 )) + (passengers*100/1000);
    //  let res = price*fuel;
    console.log(`Needed money for that trip is ${money}lv.`);
}

solve(90, 14, 2.88)