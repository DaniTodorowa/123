function solve(input){
    let town = input[0];
    let sells = Number(input[1]);

    if (town === 'Sofia'){
        if (sells <= 500 && sells >= 0){
            console.log((sells*.05).toFixed(2))
        }else if (sells <= 1000 && sells >500){
            console.log((sells*.07).toFixed(2))
        }else if (sells <= 10000 && sells >1000){
            console.log((sells*.08).toFixed(2))
        }else if ( sells >10000){
            console.log((sells*.12).toFixed(2))
        }else {
            console.log('error')
        }
    }else if (town === 'Varna'){
        if (sells <= 500 && sells >= 0){
            console.log((sells*.045).toFixed(2))
        }else if (sells <= 1000 && sells >500){
            console.log((sells*.075).toFixed(2))
        }else if (sells <= 10000 && sells >1000){
            console.log((sells*.1).toFixed(2))
        }else if ( sells >10000){
            console.log((sells*.13).toFixed(2))
        }else {
            console.log('error')
        }
    }else if (town === 'Plovdiv'){
        if (sells <= 500 && sells >= 0){
            console.log((sells*.055).toFixed(2))
        }else if (sells <= 1000 && sells >500){
            console.log((sells*.08).toFixed(2))
        }else if (sells <= 10000 && sells >1000){
            console.log((sells*.12).toFixed(2))
        }else if ( sells >10000){
            console.log((sells*.145).toFixed(2))
        }else {
            console.log('error')
        }
    }else {
        console.log('error')
    }
}

solve(['Varna', '1000'])

