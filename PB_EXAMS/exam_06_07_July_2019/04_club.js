function solve(input) {
    let gain = Number(input.shift());
    let isGained = false;
    let profit = 0;
    let data = input.shift();
    while (data!=="Party!"){
        let name = data;
        let countCocktails = Number(input.shift());
        let price = name.length;
        let currProfit = price*countCocktails;
        if (currProfit%2 !==0){
            currProfit *= .75;
        }

        if (currProfit + profit>= gain){
            profit += currProfit;
            isGained = true;
            break;
        }else {
            profit += currProfit;
            data = input.shift();
        }


    }
    if (isGained){
        console.log(`Target acquired.`);

    }else {
        console.log(`We need ${(gain - profit).toFixed(2)} leva more.`);

    }
    console.log(`Club income - ${(Math.abs(profit)).toFixed(2)} leva.`);

}
solve([ '500', 'Bellini', '6', 'Bamboo', '7', 'Party!'
])