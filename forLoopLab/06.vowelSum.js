function solve(input){
    let text = input[0];
    let l = text.length;
    let sum = 0;
    for (i = 0; i<=l+1;i++){
        if (text[i] === 'a'){
            sum += 1;
        }else if (text[i] === 'e'){
            sum += 2;
        }else if (text[i] === 'i'){
            sum += 3;
        }else if (text[i] === 'o'){
            sum += 4;
        }else if (text[i] === 'u'){
            sum += 5;
        }
    }
    console.log(sum);
}

solve(['beer'])