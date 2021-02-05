
function solve(input){
    let degrees = Number(input[0]);
    let time = input[1];
    let outfit = ''
    let shoes = ''
    if (degrees <= 18  && degrees >= 10){
        if (time === "Morning"){
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }else if (time === "Afternoon"){
            outfit = 'Shirt'
            shoes = 'Moccasins'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }else if (time === "Evening"){
            outfit = 'Shirt'
            shoes = 'Moccasins'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }
    }else if (degrees > 18  && degrees <= 24){
        if (time === "Morning"){
            outfit = 'Shirt'
            shoes = 'Moccasins'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }else if (time === "Afternoon"){
            outfit = 'T-Shirt'
            shoes = 'Sandals'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }else if (time === "Evening"){
            outfit = 'Shirt'
            shoes = 'Moccasins'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }
    }else if (degrees >= 25 ){
        if (time === "Morning"){
            outfit = 'T-Shirt'
            shoes = 'Sandals'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }else if (time === "Afternoon"){
            outfit = 'Swim Suit'
            shoes = 'Barefoot'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }else if (time === "Evening"){
            outfit = 'Shirt'
            shoes = 'Moccasins'
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
        }
    }
}

solve(['28', 'Evening'])

