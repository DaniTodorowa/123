function solve(input) {
    let count = Number(input.shift());
    let winnerName = '';
    let winnerPoints = 0;
    let maxPoints = 0;
    for (let i = 1; i <=count; i++) {
        let name = input.shift();
        let currPoints =0;
        let command = input.shift();
        while (true){

            if (command === 'Stop'){
                break;
            }else {

                currPoints+=Number(command);
            }
            command = input.shift();
        }
        console.log(`${name} has ${currPoints} points.`);
        if (currPoints>maxPoints){
            maxPoints = currPoints;
            winnerName = name;
            winnerPoints = currPoints;
            console.log(`${name} is the new number 1!`);
        }
    }
    console.log(`${winnerName} won competition with ${winnerPoints} points!`);
}
solve([2,'Chef Angelov',9,9,9,"Stop",'Chef Rowe',10,10,10,10,"Stop"])