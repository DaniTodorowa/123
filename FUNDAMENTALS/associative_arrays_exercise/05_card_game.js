function solve(input) {
    let map = {2:2, 3:3,4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, J:11,
        Q:12, K:13, A:14, S:4, H:3, D:2,C:1};

    function createObj(arr){
        let players = {}
        arr.forEach(line=>{
            let data = line.split(": ");
            let name = data[0];
            let deck = data[1].split(", ");
            if (players[name] === undefined){
                players[name] = new Set();
            }
            deck.forEach(card=>{
                players[name].add(card);
            });


        });
        return players

    }
    function sumDeck(arr, map){ // this is the sum per only one player
        let sum = 0;
        arr.forEach(card=>{
            let tokens = card.split("");
            let type = tokens.pop();
            let power = tokens.join("");
            sum+= map[power]* map[type];
        });


        return sum;
    }

    function  createPlayersScore(players, map){
        let obj = {};
        Object.entries(players).forEach(entry=>{
            let name = entry[0]; //string
            let deck = entry[1] // set
            obj[name] = sumDeck(Array.from(deck.values()),map)
        });
        return obj;
    }
    let players = createObj(input);
    let scoreObj = createPlayersScore(players, map);
    //console.log(scoreObj);
    Object.keys(scoreObj).forEach(key=>{
        console.log(`${key}: ${scoreObj[key]}`);
    });


}

solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])