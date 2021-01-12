function solve(input){
    let leap = Number(input[0]);
    let end = Number(input[1]);
    for (i = leap; i<=end;i+=4){
        console.log(i);
    }
}
solve(['2020','2032'])