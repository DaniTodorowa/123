function solve(input) {
    let minControl = Number(input.shift());
    let secControl = Number(input.shift());
    let length = Number(input.shift());
    let secPer100metres = Number(input.shift());
    let totalControlTime = minControl* 60 + secControl;
    let gainedTime = 0;
    gainedTime = length*secPer100metres/100 -((length/120))*2.5;
    //console.log(totalControlTime);
    //console.log(gainedTime);
    if (gainedTime>totalControlTime){
        console.log(`No, Marin failed! He was ${(gainedTime - totalControlTime).toFixed(3)} second slower.`);
    }else {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${gainedTime.toFixed(3)}.`);
    }
}

solve(['1',
    '20',
    '1546',
    '12',

])