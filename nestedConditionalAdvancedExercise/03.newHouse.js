function solve(input){
    let flower = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalCosts = 0
    if (flower === 'Roses'){
        if (countFlowers > 80){
            totalCosts = countFlowers*5
            totalCosts -=totalCosts*.1
            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }else {
            totalCosts = countFlowers*5

            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }
    }else if (flower === 'Dahlias'){
        if (countFlowers > 90){
            totalCosts = countFlowers*3.8
            totalCosts -=totalCosts*.15
            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }else {
            totalCosts = countFlowers*3.8

            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }
    }else if (flower === 'Tulips'){
        if (countFlowers > 80){
            totalCosts = countFlowers*2.8
            totalCosts -=totalCosts*.15
            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }else {
            totalCosts = countFlowers*2.8

            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }
    }else if (flower === 'Narcissus'){
        if (countFlowers <120){
            totalCosts = countFlowers*3
            totalCosts +=totalCosts*.15
            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }else {
            totalCosts = countFlowers*3

            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }
    }else if (flower === 'Gladiolus'){
        if (countFlowers <80){
            totalCosts = countFlowers*2.5
            totalCosts +=totalCosts*.2
            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }else {
            totalCosts = countFlowers*2.5

            if (totalCosts <= budget){
                console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget-totalCosts).toFixed(2)} leva left.`);
            }else {
                console.log(`Not enough money, you need ${(totalCosts-budget).toFixed(2)} leva more.`);
            }
        }
    }
}

solve(['Narcissus', '119','360'])