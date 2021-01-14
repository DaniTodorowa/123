function solve(input){
    let data =input;
    let totalPieces = Number(data[0])*Number(data[1]);
    let index = 2;
    while (index<data.length){
        if (data[index]==="STOP"){
            {break;}
        }else {
            totalPieces-=Number(data[index]);
            index++;
        }
    }
    if (totalPieces<0){
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    }else {
        console.log(`${totalPieces} pieces are left.`);
    }

}
solve((["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
)