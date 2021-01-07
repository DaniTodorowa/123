function moneyNeeded(strawberryPrice, bananaKg, orangeKg, raspberryKg, strawberryKg){
    const priceRaspberry = strawberryPrice/2
    const priceOrange = priceRaspberry - priceRaspberry*0.4
    const  priceBanana = priceRaspberry - priceRaspberry * 0.8
    const res = (strawberryPrice * strawberryKg + bananaKg * priceBanana + priceRaspberry * raspberryKg + priceOrange * orangeKg)
    console.log(res)
}

moneyNeeded("63.5", "3.57", "6.35", "8.15", "2.5")