function solve(input) {
    let dictionary = {};
    while (input.length > 0) {
        let line = input.shift()
        let libObj = JSON.parse(line);
        let term = Object.keys(libObj);
        //console.log(key);
        let definition = Object.values(libObj).join("");
        dictionary[term] = definition;
    }
    let sortedDictionary = {};
    for (const key of Object.keys(dictionary).sort((a,b)=>a.localeCompare(b))){
        sortedDictionary[key] = dictionary[key];
    }
    //console.log(sortedDictionary);
    //console.log(dictionary);
    for (const term in sortedDictionary){
        if (sortedDictionary.hasOwnProperty(term)){
            const definition = sortedDictionary[term];
            console.log(`Term: ${term} => Definition: ${definition}`);
        }
    }


}

solve(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])