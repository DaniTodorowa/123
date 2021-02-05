function solve(input){
    let data = input.shift();
    let sumNonPrime = 0;
    let sumPrime = 0;
    let isPrime =false;
    let isNegative = false;
    while (data !=='stop'){
        let num = Number(data);
        if ((num) <0){
            isNegative = true;
            console.log(`Number is negative.`);
            data = input.shift();
            continue;

        }else {
            for (let i = (num - 1); i > 1; i--) {
                if (num % i !== 0 ) {
                    isPrime = true;

                } else {
                    isPrime = false;
                    break;
                }
            }
        }if (isPrime){
            sumPrime+=num;
        }else {
            sumNonPrime+=num;
        }






        data = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
solve((["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
)
