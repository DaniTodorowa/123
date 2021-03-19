function solve(input) {
    let gladiatorsObj = {};

    while (input.length > 0) {

        let data = input.shift().split(" ")
        //console.log(data);
        if (data.length === 2) {
            break;
        } else {
            if (data.length === 5) {
                let [gladiator, technique, skill] = [data[0], data[2], Number(data[4])];
                let techObj = {technique: technique, skill: skill};
                if (gladiatorsObj[gladiator] === undefined) {
                    gladiatorsObj[gladiator] = [];

                    gladiatorsObj[gladiator].push(techObj);

                } else {
                    if(gladiatorsObj[gladiator][technique]< skill){
                        gladiatorsObj[gladiator].push(techObj);
                    }

                }
            } else if (data.length === 3) {
                if (gladiatorsObj[data[0]] !== undefined && gladiatorsObj[data[3]] !== undefined) {



                }
            }
        }

    }
    console.log(gladiatorsObj);


}

solve(['Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])