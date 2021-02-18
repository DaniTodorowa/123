function solve(input){
    let record = Number(input.shift());
    let meters = Number(input.shift());
    let secPer1meter = Number(input.shift());
    let late = 0;
    let timeInSeconds = 0;
    let totalSeconds = meters*secPer1meter;
    late = Math.floor(meters/50)*30;
    totalSeconds +=late;
    if (totalSeconds< record){
        console.log(`Yes! The new record is ${totalSeconds.toFixed(2)} seconds.`);
    }else {
        console.log(`No! He was ${(Math.abs(totalSeconds-record)).toFixed(2)} seconds slower.`);
    }
}
solve([1377,389,3])