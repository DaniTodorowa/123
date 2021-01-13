function solve(input){
    let initSum = Number(input[0]);
    let counter = 1;
    let sum = 0;
    while (sum<initSum){
        sum+=Number(input[counter]);
        counter ++;
    }
    console.log(sum);
}

solve(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"]
)