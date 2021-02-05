function solve(input){
    let counter = 0;
    let indexCounter = 0;
    for (let i = 0;i<(input.length);i+=indexCounter+2){
        indexCounter = 0;
        let destination = input[i];
        let budget = Number(input[i+1]);
        counter+=1;
        for (let j=i+2;j<input.length;j++){
            indexCounter++
            counter++;
            if (input[j]!== "End") {
                budget = budget - Number(input[j])

                if (budget === 0 || budget < 0) {
                    counter++;

                    console.log(`Going to ${destination}!`);
                    {
                        break;
                    }


                } else {

                    continue;
                }
            }else {
                break;
            }
        }
    }
}



solve((["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
)