function solve(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let isHelmet = false;
    let isSword = false;
    let counterShield = 0;
    for (let i = 1; i <= lostCount; i++) {
        isHelmet = false;
        isSword = false;
        if (i % 2 === 0) {
            sum += helmetPrice;
            isHelmet = true;
        }
        if (i % 3 === 0) {
            sum += swordPrice;
            isSword = true;
        }
        if (isSword && isHelmet) {
            sum += shieldPrice;
            counterShield++;
            if (counterShield % 2 === 0) {
                sum += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

solve(7,
    2,
    3,
    4,
    5
)