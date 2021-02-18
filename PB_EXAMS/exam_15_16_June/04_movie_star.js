function solve(input) {
    let budget = Number(input.shift());
    let data = input.shift();
    let wage = 0;
    let noBudget = false;
    while (data!=="ACTION" && data!==""){
        let name = data;
        //console.log(typeof name);
        if (name.length<= 15){
            wage = Number(input.shift());
            budget -= wage;


        }else {
            wage = budget*.2;
            budget -= wage;
        }
        if (budget ===0 || budget<0) {
            noBudget = true;
            break;
        }else {
            data = input.shift();
        }
    }
    if (noBudget){
        console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
    }else {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}

solve([
    '90000',
    'Christian Bale',
    '70000.50',
    'Leonard DiCaprio',
    'Kevin Spacey',
    '24000.99',
    'ACTION',
    ''

])