function solve(input) {
    let name = input.shift();
    let counter = 0;
    let winLeg = false;
    let points = 301;
    let unsuccessCounter = 0;
    let currPoints = 0;
    let strike = '';
    let data  = input.shift();
    while (input.length>0 && data !== ""){
        if (data==="Retire"){
            break;
        }else {
            strike = data;
            currPoints = Number(input.shift());
            if (strike === "Single"){
                if (currPoints> points){
                    unsuccessCounter++;

                }else {
                    points -= currPoints;
                    counter++;
                }
            }else if(strike === "Double"){
                if (currPoints*2> points){
                    unsuccessCounter++;

                }else {
                    points -= currPoints*2;
                    counter++;
                }

            }else if (strike === "Triple"){
                if (currPoints*3> points){
                    unsuccessCounter++;

                }else {
                    points -= currPoints*3;
                    counter++;
                }

            }

        }
        if (points===0){
            winLeg = true;
            break;
        }
        data = input.shift();
    }
    if (winLeg){
        console.log(`${name} won the leg with ${counter} shots.`);
    }else {
        console.log(`${name} retired after ${unsuccessCounter} unsuccessful shots.`);
    }
}

solve([

    'Rob Cross',
    'Triple',
    '20',
    'Triple',
    '20',
    'Triple',
    '20',
    'Triple',
    '20',
    'Double',
    '20',
    'Triple',
    '20',
    'Double',
    '5',
    'Triple',
    '10',
    'Double',
    '6',
    'Retire',


])