function solve(input){
    let budget = Number(input[0]);
    let season = input[1];
    let priceBoat = 0;
    let countFishmen = Number(input[2]);
    if (season === "Spring"){
        priceBoat = 3000;
        if (countFishmen <= 6){
            priceBoat -= priceBoat*.1


        }else if (countFishmen > 7 && countFishmen <= 11) {
            priceBoat -= priceBoat * .15


        }else {
            priceBoat -= priceBoat*.25


        }
    }else if (season === "Summer" || season === "Autumn"){
        priceBoat = 4200;
        if (countFishmen <= 6){
            priceBoat -= priceBoat*.1


        }else if (countFishmen > 7 && countFishmen <= 11) {
            priceBoat -= priceBoat * .15


        }else {
            priceBoat -= priceBoat*.25

        }
    }else if (season === "Winter"){
        priceBoat = 2600;
        if (countFishmen <= 6){
            priceBoat -= priceBoat*.1


        }else if (countFishmen > 7 && countFishmen <= 11) {
            priceBoat -= priceBoat * .15


        }else {
            priceBoat -= priceBoat*.25


        }
    }if (countFishmen % 2 === 0 && season !== "Autumn"){
        priceBoat -= priceBoat*.05

    }if(priceBoat <= budget){
        console.log(`Yes! You have ${(budget-priceBoat).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${(priceBoat-budget).toFixed(2)} leva.`);
    }
}

solve(['2000','Winter','13'])