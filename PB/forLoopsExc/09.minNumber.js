function solve(input){
    let maxvalue = Math.pow(2,53);
    let numCount = Number(input[0]);
    for (i = 1; i<= numCount;i++){
        if (Number(input[i] < maxvalue)){
            maxvalue = Number(input[i])
        }
    }
    console.log(maxvalue);


}
solve(["2",
    "-1",
    "-2"]
)