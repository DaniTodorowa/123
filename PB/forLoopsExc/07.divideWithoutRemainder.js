function solve(input){

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (i = 1; i<=Number(input[0]);i++){

         if (Number(input[i])%2 === 0){
            p1+=1;}
         if (Number(input[i])%3 === 0){
            p2+=1;}
        if (Number(input[i])%4 === 0){
            p3+=1;
        }
    }
    console.log(`${((p1/Number(input[0])*100).toFixed(2))}%`);
    console.log(`${((p2/Number(input[0])*100).toFixed(2))}%`);
    console.log(`${((p3/Number(input[0])*100).toFixed(2))}%`);


}
solve(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"]
)