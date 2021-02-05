function solve(input){
    let month = input[0];
    let count = Number(input[1]);
    let appPrice = 0;
    let studioPrice = 0;
    if (month === "May" || month === "October"){
        if (count > 7 && count <= 14){
            studioPrice = count*50;
            studioPrice -= studioPrice*.05
            appPrice = count*65

        }else if (count> 14){
            studioPrice = count*50;
            studioPrice -= studioPrice*.3
            appPrice = count*65
        }else {
            studioPrice = count * 50
            appPrice = count * 65
        }
    }else if (month === "June" || month === "September"){
        if (count > 14){
            studioPrice = count*75.2;
            studioPrice -= studioPrice*.1
            appPrice = count*68.7
        }else {
            studioPrice = count*75.2
            appPrice = count*68.7
        }
    }else if (month === "July" || month === "August"){

        studioPrice = count*76;

        appPrice = count*77


    }
    if (count > 14){
        appPrice -= appPrice*.1
    }
    console.log(`Apartment: ${appPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

solve(['August', '20'])