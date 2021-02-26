function solve(input) {
    let isDead = false;
    let heath = 100;
    let coins = 0;
    let stringArr = input[0].split("|");
    //console.log(string);
    for (let i = 0; i < stringArr.length; i++) {
        let currentCommand = stringArr[i].split(" ");
        let command = currentCommand[0];
        let value = Number(currentCommand[1]);
        if (command === 'potion') {

            if (heath +value> 100) {
                let diffHealth = 100 - heath;
                heath = 100;
                console.log(`You healed for ${diffHealth} hp.`);
            } else {
                heath += value;
                console.log(`You healed for ${value} hp.`);
            }
            console.log(`Current health: ${heath} hp.`);
        } else if (command === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else if (command !== 'potion' && command !== 'chest') {
            let monster = command;
            heath -= value;
            if (heath > 0) {
                console.log(`You slayed ${monster}.`);

            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;
            }
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${heath}`);
    }
}


solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])