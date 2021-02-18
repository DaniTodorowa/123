function solve(input) {
    let anualTax = Number(input.shift());
    let cost = 0;
    let shoes = anualTax*.6;
    let clothes = shoes*.8;
    let ball = clothes/4;
    let accesiories = ball/5;
    cost = shoes + clothes + ball + accesiories + anualTax;
    console.log(cost.toFixed(2));

}

solve([320])