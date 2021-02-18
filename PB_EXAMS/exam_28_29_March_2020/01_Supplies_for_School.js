function solve(input){
    let countPens = Number(input.shift());
    let countMarker = Number(input.shift());
    let priceWash = Number(input.shift());
    let percentDecrease = Number(input.shift());
    let sum = 0;
    sum = countPens*5.8 + countMarker*7.2 + priceWash*1.2;
    sum -= sum*percentDecrease/100;
    console.log(sum.toFixed(3));

}

solve([4,2,5,13])

