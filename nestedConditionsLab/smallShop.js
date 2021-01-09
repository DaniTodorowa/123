function solve(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    if (town === 'Sofia') {
        if (product === 'coffee') {
            console.log((quantity * .5).toFixed(2))
        } else if (product === 'water') {
            console.log(((quantity * .8).toFixed(2)))
        } else if (product === 'beer') {
            console.log((quantity * 1.2).toFixed(2))
        } else if (product === 'peanuts') {
            console.log((quantity * 1.6))
        }else if (product === 'sweets'){
            console.log((quantity*1.45).toFixed(2))
        }
    } else if (town === 'Plovdiv') {
        if (product === 'coffee') {
            console.log((quantity * .4).toFixed(2))
        } else if (product === 'water') {
            console.log(((quantity * .7).toFixed(2)))
        } else if (product === 'beer') {
            console.log((quantity * 1.15).toFixed(2))
        } else if (product === 'peanuts') {
            console.log((quantity * 1.5).toFixed(2))
        }else if (product === "sweets"){
            console.log((quantity*1.3).toFixed(2))
        }
    }else if (town === 'Varna') {
        if (product === 'coffee') {
            console.log((quantity * .45).toFixed(2))
        } else if (product === 'water') {
            console.log(((quantity * .7).toFixed(2)))
        } else if (product === 'beer') {
            console.log((quantity * 1.1).toFixed(2))
        } else if (product === 'peanuts') {
            console.log((quantity * 1.55).toFixed(2))
        }else if (product === "sweets"){
            console.log((quantity*1.35).toFixed(2))
        }
    }
}

solve(["beer", 'Sofia', '6'])