function solve(input){
    let floor = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    let firstSymbol ='';
    let printLine = '';
    for (let f =floor;f>0;f--){

        if (floor === 1 || f === floor){
            firstSymbol = "L";

        }else if (f % 2===0){
            firstSymbol = 'O';
        }else {
            firstSymbol = "A";
        }

        for (let r = 0; r<roomsPerFloor; r++){
            printLine += (`${firstSymbol}${f}${r} `);

        }
        console.log(printLine);
        printLine = '';


    }
}
solve(['6','4'])