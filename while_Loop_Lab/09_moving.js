function solve(input){
    let data = input;
    let isFreeSpace = true;
    let volume = Number(input[0])*Number(input[1])*Number(input[2]);
    let index = 3;
    while ((data[index])!== 'Done'){
        if (volume<=0){
            isFreeSpace = false;
            {break;}
        }else {
            volume-=Number(data[index]);
            index++
        }
    }
    if (isFreeSpace){
        console.log(`${volume} Cubic meters left.`);
    }else {
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
    }

}
solve((["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
)