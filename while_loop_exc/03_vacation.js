function solve(input){
    let data = input;
    let neededMoney = Number(data[0]);

    let money = Number(data[1]);
    let index = 2;
    let counter = 0;
    let spendCounter = 0;
    let isSavedEnough =false;
    while (index<data.length){
        if(data[index]==='spend'){
            counter++;
            spendCounter++;
            money -= Number(data[index+1]);
            if (spendCounter ===5){
                console.log(`You can't save the money.`);
                console.log(`${counter}`);{break;}
            }else if(money<=0){
                money=0;
                index+=2;
            }else {
                index+=2;
            }


        }else if(data[index]===`save`){
            money+= Number(data[index+1]);
            counter++;
            if (money>=neededMoney){
                isSavedEnough =true;{break;}
            }else {
                index+=2;
            }

        }

    }
    if  (isSavedEnough !== false){
        console.log(`You saved the money for ${counter} days.`);
    }
}
solve((["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
)