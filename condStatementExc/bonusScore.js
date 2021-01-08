function bonusScore(input){
    let bonus = 0;
    let total = 0;
    let points = Number(input);
    if (points <= 100){
        bonus += 5;
    }else if (points > 100 && points <= 1000){
        bonus += points * .2;
    }else if (points > 1000){
        bonus += points * .1;
    }
    if (points % 2 === 0){
        bonus += 1
    }
    if (points % 10 === 5){
        bonus += 2
    }
    total = points + bonus;
    console.log(`${bonus}`)
    console.log(`${total}`)
}

bonusScore("15875")