function solve(input) {
    let countTournaments = Number(input.shift());
    let totalPoints = Number(input.shift());
    let level = '';
    let winsCounter = 0;
    let gainedPoints = 0;
    for (let i =0; i<=countTournaments;i++){
        level = input.shift();
        if (level==='W'){
            totalPoints += 2000;
            gainedPoints += 2000;
            winsCounter++;
        }else if(level === "SF"){
            totalPoints += 720;
            gainedPoints += 720;
        }else if (level ==="F"){
            totalPoints += 1200;
            gainedPoints += 1200;
        }
    }
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${(Math.floor(gainedPoints/countTournaments))}`);
    console.log(`${((winsCounter/countTournaments)*100).toFixed(2)}%`);
}

solve([
    '5',  '1400', 'F',
    'SF', 'W',    'W',
    'SF', '',     ''
])