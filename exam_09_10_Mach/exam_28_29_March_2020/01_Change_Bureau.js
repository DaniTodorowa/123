function solve(input){
    let countBitcoins = Number(input.shift());
    let countUan = Number(input.shift());
    let commPercent = Number(input.shift());
    let resultLV = 0;


    resultLV = countBitcoins*1168 +  countUan*(.15*1.76);
    let result = (resultLV - resultLV*commPercent/100)/1.95;
    //console.log(resultLV);
    console.log(result.toFixed(2));
}
solve([7,50200.12,3])