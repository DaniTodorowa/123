function solve(input){
    let num = Number(input.shift());
    let current =1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows =1; rows<=num;rows++){
       for (let cols = 1;cols<=rows;cols++){
           if (current>num){
               isBigger = true;
               break;
           }
           printCurrentLine+=current + " ";
           current++;
       } console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger===true){
            break;
        }
    }


}
solve(["7"]);