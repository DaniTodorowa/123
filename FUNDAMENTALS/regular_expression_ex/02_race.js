function solve(input) {
    let racers = input[0].split(', ');
    let racerInfo = {};
    for (let data of input.slice(1)){
        let nameMatch = data.match(/[A-Za-z]+/g);

        if (nameMatch){
            let distanceMatch = data.match(/[\d]/g);
            let name = nameMatch.join('');
            let distance = calculateDistance(distanceMatch);
            //console.log(distance);
            if (!racerInfo[name]){
                racerInfo[name] = 0;
            }
            racerInfo[name] += distance;
        }
    }
    function calculateDistance(arr){
        let totalDistance = 0;
        arr.forEach((digit)=> totalDistance+=Number(digit));
        return totalDistance;

    }

}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',

])