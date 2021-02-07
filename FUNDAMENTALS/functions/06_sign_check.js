function solve(a, b, c) {
    let counter = 0;
    if (a < 0) {
        counter++;
    }
    if (b < 0) {
        counter++;
    }
    if (c < 0) {
        counter++;
    }

    if ((a !== 0 && b !== 0 && c !== 0) && (counter === 1 || counter === 3)){
        console.log('Negative');
    }else{
        return console.log('Positive');
    }






}

solve(5, 12, 15)