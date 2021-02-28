function solve(input) {
    let middleIndex = 0;
    let isPalindrome = true;
    for (let j = 0; j < input.length; j++) {
        isPalindrome = true;
        let curr = input[j].toString();
        if (curr.length %2 ===0){
             middleIndex = (curr.length / 2) ;
        }else {
            middleIndex = middleIndex = Math.ceil(curr.length / 2) -1;
        }


        for (let i = 0; i < middleIndex; i++) {
            let symbolLeft = curr[i];
            let symbolRight = curr[(curr.length - i-1)];
            if (symbolLeft !== symbolRight){
                isPalindrome = false;
                break;

            }
        }
        if (isPalindrome === true){
            console.log('true');
        }else {
            console.log('false');
        }


    }

}

(solve([123, 323, 421, 121]));
