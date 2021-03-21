function solve(password) {

    function lengthValidate(word) {
        let hasLength = true;
        if(word.length>= 6 && word.length<=10){
            hasLength = true;
        }else {
            hasLength = false;
        }
        return hasLength;
    }
    function onlyLettAndDigits(word){
        let isLetAndDig = true;
        for (let i=0;i<word.length;i++){
            let currChar = word[i];
            if((currChar.charCodeAt(0)>=48 && currChar.charCodeAt(0)<=57) || (currChar.charCodeAt(0)>=65 && currChar.charCodeAt(0)<=90  )
                || (currChar.charCodeAt(0)>=97 && currChar.charCodeAt(0)<=122  )){

            }else {
                isLetAndDig = false;
                break;
            }
        }
        return isLetAndDig;
    }
    function atLeast2Digits(word){
        let has2Dig = true;
        let countDig = 0;
        for (let i=0;i<word.length;i++){
            if(word[i].charCodeAt(0)>=48 && word[i].charCodeAt(0)<=57){
                countDig++;
            }
        }
        if (countDig>=2){
            has2Dig = true;
        }else {
            has2Dig = false;
        }
        return has2Dig;
    }

    if(lengthValidate(password) && onlyLettAndDigits(password) && atLeast2Digits(password)){
        console.log( (`Password is valid`));
    }else {
        if(!lengthValidate(password)){
            console.log( "Password must be between 6 and 10 characters");
        }
        if(!onlyLettAndDigits(password)){
            console.log("Password must consist only of letters and digits");
        }
        if(!atLeast2Digits(password)){
            console.log("Password must have at least 2 digits");
        }
    }
}

(solve('My'));