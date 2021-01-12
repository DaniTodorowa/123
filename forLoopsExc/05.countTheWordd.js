function solve(input){
    let text = input[0];
    var res = text.split('');
    let counter =1;
    for (i = 0; i<text.length; i++){
        if (res[i] === " "){
            counter +=1;
        }
    }
    if (counter>10){
        console.log(`The message is too long to be send! Has ${counter} words.`);
    }else {
        console.log("The message was send successfully!");
    }

}

solve(['This message has exactly eleven words. One more as it\'s allowed!'])