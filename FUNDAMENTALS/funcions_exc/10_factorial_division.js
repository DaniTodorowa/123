function solve(firs,second) {
    let firstRes =1;
    let secRes = 1;
    for (let i =firs;i>0;i--){
         firstRes*= i;
    }
    for (let j =second;j>0;j--){
        secRes *= j;
    }
    console.log((firstRes/secRes).toFixed(2));
}

solve(6,2)