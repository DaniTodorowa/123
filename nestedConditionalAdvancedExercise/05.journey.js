function solve(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = ''
    let place = ''
    if (budget <= 100){
        destination = "Bulgaria";
        if (season === 'summer'){
            place = 'Camp'
             budget = budget*.3
        }else {
            place = 'Hotel'
            budget = budget*.7
        }
    }else if (budget > 100 && budget <= 1000){
        destination = "Balkans";
        if (season === 'summer'){
            place = 'Camp'
            budget = budget*.4
        }else {
            place = 'Hotel'
            budget = budget*.8
        }
    }else if ( budget > 1000){
        destination = "Europe";
        budget = budget*.9
        place = "Hotel"
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}

solve(["312", 'summer'])