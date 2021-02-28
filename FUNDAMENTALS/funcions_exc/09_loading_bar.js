function solve(num) {
    let decimal = num/10;
    let percentageSign = "%".repeat(decimal);
    let pointsSign = ".".repeat(( 10 - decimal));
    let res = `${decimal}0% [${percentageSign}${pointsSign}]`
    if (num === 100){
        console.log('100% Complete!');
        console.log(`[${percentageSign}]`);
    }else {
        console.log(`${res}`);
        console.log('Still loading...');
    }
}

solve(20)