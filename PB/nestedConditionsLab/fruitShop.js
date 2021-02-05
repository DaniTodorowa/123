function solve(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'|| day === 'Friday'){
        if (fruit === 'banana'){
            console.log((quantity*2.5).toFixed(2))
        }else if(fruit === "apple"){
            console.log((quantity*1.2).toFixed(2));
        }else if(fruit === "orange"){
            console.log((quantity*.85).toFixed(2));
        }else if(fruit === "grapefruit"){
            console.log((quantity*1.45).toFixed(2));
        }else if(fruit === "kiwi"){
            console.log((quantity*2.7).toFixed(2));
        }else if(fruit === "pineapple"){
            console.log((quantity*5.5).toFixed(2));
        }else if(fruit === "grapes"){
            console.log((quantity*3.85).toFixed(2));
        }else {
            console.log('error')
        }
    }else if (day === 'Saturday' || day === 'Sunday'){
        if (fruit === 'banana'){
            console.log((quantity*2.7).toFixed(2))
        }else if(fruit === "apple"){
            console.log((quantity*1.25).toFixed(2));
        }else if(fruit === "orange"){
            console.log((quantity*.9).toFixed(2));
        }else if(fruit === "grapefruit"){
            console.log((quantity*1.6).toFixed(2));
        }else if(fruit === "kiwi"){
            console.log((quantity*3.0).toFixed(2));
        }else if(fruit === "pineapple"){
            console.log((quantity*5.6).toFixed(2));
        }else if(fruit === "grapes"){
            console.log((quantity*4.2).toFixed(2));
        }else {
            console.log('error')
        }
    }else {
        console.log('error')
    }
}

solve(['apple', 'Workday', '2'])