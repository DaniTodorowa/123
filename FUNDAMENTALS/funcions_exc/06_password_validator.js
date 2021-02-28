function solve(input) {
    let pass = input.toString();
    let isBw6and10 = true;
    let isConsistAtLeast2digits = true;
    let isOnlyLettersDigits = true;
    let result = 'Password is valid';
    let countDig = 0;



    function isDigit(a) {

        return (Number(a) >= 0 && Number(a) <= 9)
    }
    function isLetter(i){
        let charValue = i.charCodeAt(0);
        return ((charValue >= 65 && charValue<= 90 ) || (charValue>= 97 && charValue<=122));
    }



    for (let i = 0; i < pass.length; i++) {
        if(isDigit(pass[i])){
            countDig ++;
        }else {
            //isOnlyLettersDigits = false;
        }
        if (!isLetter(pass[i]) && ! isDigit(pass[i])){
            isOnlyLettersDigits = false;

        }



    }
    if (!(pass.length>= 6 && pass.length<=10)){
        isBw6and10 = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!(isOnlyLettersDigits)){
        console.log("Password must consist only of letters and digits");
    }
    if (countDig <2){
        console.log('Password must have at least 2 digits');
    }
    //res = isConsistAtLeast2digits && isOnlyLettersDigits && isBw6and10;                why not?!!
    if (isConsistAtLeast2digits && isOnlyLettersDigits && isBw6and10){
        console.log(result);
    }


}

solve('&')