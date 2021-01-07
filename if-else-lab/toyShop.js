function excursion(priceTrip, puzzlesCount, dollsCount, bearsCount, minionsCount, tracksCount) {
    let sumLeft = 0;
    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.2;
    let trackPrice = 2;
    let countTotal = Number(puzzlesCount) + Number(dollsCount) + Number(bearsCount) + Number(minionsCount) + Number(tracksCount);
    let profit = Number(puzzlesCount) * Number(puzzlePrice) + Number(dollPrice) * Number(dollsCount) + Number(bearsCount) * Number(bearPrice) + Number(minionPrice) * Number(minionsCount) + Number(tracksCount) * Number(trackPrice);
    if (countTotal >= 50) {
        sumLeft = profit - profit * .25;
        sumLeft = sumLeft - sumLeft * .1;
        if (sumLeft >= priceTrip) {
            console.log(`Yes! ${(sumLeft - priceTrip).toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${(priceTrip - sumLeft).toFixed(2)} lv needed.`)
        }

    } else {
        sumLeft = profit - profit * .1;
        if (sumLeft >= priceTrip) {
            console.log(`Yes! ${sumLeft.toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${(priceTrip - sumLeft).toFixed(2)} lv needed.`)
        }
    }
}

excursion("320", "8", "2", "5", "5", "1")