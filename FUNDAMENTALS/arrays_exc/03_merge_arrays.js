function solve(arrayOne =[], arrayTwo = []) {
    let resArray =[];
    for (let i = 0; i< arrayTwo.length;i++){
        if (i% 2 === 0){
            resArray.push((Number(arrayOne[i])+ Number(arrayTwo[i])));
        }else {
            resArray.push(arrayOne[i]+arrayTwo[i]);
        }
    }
    console.log(resArray.join(" - "));
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)