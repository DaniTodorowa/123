function moneyNeeded(input){
    let strawberryPrice = Number(input[0]);
    let bananaKg = Number(input[1]);
    let orangeKg = Number(input[2]);
    let raspberryKg = Number(input[3]);
    let strawberryKg = Number(input[4]);

    const priceRaspberry = Number(strawberryPrice/2);
    const priceOrange = priceRaspberry - priceRaspberry*0.4
    const  priceBanana = priceRaspberry - priceRaspberry * 0.8
    const res = (strawberryPrice * strawberryKg + bananaKg * priceBanana + priceRaspberry * raspberryKg + priceOrange * orangeKg)
    console.log(res.toFixed(2))
}

moneyNeeded(["48", "10", "3.3", "6.5","1.7"])