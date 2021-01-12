function solve(input){
    let factorial = Number(input[0]);
    let res = 1;
    for (i = 1; i<= factorial;i++){
        res=res*i;
    }
    console.log(res);
}

solve(['8'])