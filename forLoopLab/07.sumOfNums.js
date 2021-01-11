function solve(input){
    let text = input[0];
    let l = text.length;
    let sum = 0;
    for ( i = 0; i<l; i++){
        sum += Number(text[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

solve(['564891'])