function solve(input){
    let type = input[0];
    let rows = Number(input[1]);
    let col = Number(input[2]);
    if (type === "Premiere"){
        console.log((rows*col*12).toFixed(2)+ ' leva');
    }else if ( type === "Normal"){
        console.log((rows*col*7.5).toFixed(2)+ ' leva');
    }else if (type === "Discount"){
        console.log((col*rows*5).toFixed(2)+ ' leva')
    }
}

solve(['Premiere','12', '10'])