function solve(input){
    let days = Number(input[0]);
    let nights = days -1;
    let roomType = input[1];
    let feedback = input[2];
    let totalPrice = 0;

    if (days < 10 ){
        if (roomType === "room for one person"){
            totalPrice = nights*18;
        }else if(roomType === "apartment"){
            totalPrice = nights*25;
            totalPrice -= totalPrice*.3

        }else if(roomType === "president apartment"){
            totalPrice = nights*35;
            totalPrice -= totalPrice*.1

        }
    }else if (days >= 10 && days <= 15 ) {
        if (roomType === "room for one person") {
            totalPrice = nights * 18;
        } else if (roomType === "apartment") {
            totalPrice = nights * 25;
            totalPrice -= totalPrice * .35

        } else if (roomType === "president apartment") {
            totalPrice = nights * 35;
            totalPrice -= totalPrice * .15
        }
    }else if (days > 15){
        if (roomType === "room for one person"){
            totalPrice = nights*18;
        }else if(roomType === "apartment"){
            totalPrice = nights*25;
            totalPrice -= totalPrice*.5

        }else if(roomType === "president apartment"){
            totalPrice = nights*35;
            totalPrice -= totalPrice*.2

        }
    }if (feedback === "positive"){
        console.log((totalPrice += totalPrice*.25).toFixed(2))
    }else if (feedback === "negative"){
        console.log((totalPrice -= totalPrice*.1).toFixed(2))
    }

}

solve(['30','president apartment', 'negative'])