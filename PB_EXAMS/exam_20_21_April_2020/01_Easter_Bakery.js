function solve(input){
    let flourPrice = Number(input.shift());
    let kgFlour = Number(input.shift());
    let kgSugar = Number(input.shift());
    let eggsPlates = Number(input.shift());
    let packetsYeast = Number(input.shift());
    let sum = flourPrice*kgFlour + kgSugar*(flourPrice*.75) + eggsPlates*(flourPrice*1.1) + packetsYeast*(flourPrice*.75*.2);
    console.log(sum.toFixed(2));
}

solve([63.44,3.57,6.35,8,2])