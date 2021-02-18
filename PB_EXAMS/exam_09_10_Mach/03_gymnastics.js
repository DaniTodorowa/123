function solve(input) {
    //console.log(input);
    let country = input.shift();
    let item = input.shift();
    let max = 20;
    let score = 0;
    let difficulty = 0;
    let technical = 0;
    if (item==="ribbon"){

        if (country==="Russia"){
            difficulty = 9.1;
            technical = 9.4;
        }else if (country==="Bulgaria"){
            difficulty =9.6;
            technical = 9.4;
        }else if(country === "Italy"){
            difficulty = 9.2;
            technical = 9.5;
        }
    }else if(item === "hoop"){

        if (country==="Russia"){
            difficulty = 9.3;
            technical = 9.8;
        }else if (country==="Bulgaria"){
            difficulty =9.55;
            technical = 9.75;
        }else if(country === "Italy"){
            difficulty = 9.45;
            technical = 9.35;
        }
    }else if(item === "rope") {

        if (country === "Russia") {
            difficulty = 9.6;
            technical = 9.;
        } else if (country === "Bulgaria") {
            difficulty = 9.5;
            technical = 9.4;
        } else if (country === "Italy") {
            difficulty = 9.7;
            technical = 9.15;
        }
    }
    score = difficulty + technical;
    console.log(`The team of ${country} get ${score.toFixed(3)} on ${item}.`);
    console.log(`${((max-score)/max*100).toFixed(2)}%`);
}

solve([ 'Russia', 'rope', '' ])