function solve(input){
    let size = input.shift();
    let colourEggs = (input.shift());
    let countStacks = Number(input.shift());
    let sum = 0;
    if (size === 'Large'){
        if (colourEggs === 'Red'){
            sum = 16*countStacks;
        }else if (colourEggs === "Green"){
            sum = 12*countStacks;
        }else if (colourEggs === "Yellow"){
            sum = 9*countStacks;
        }
    }else if (size === 'Medium'){
        if (colourEggs === 'Red'){
            sum = 13*countStacks;
        }else if (colourEggs === "Green"){
            sum = 9*countStacks;
        }else if (colourEggs === "Yellow"){
            sum = 7*countStacks;
        }
    }else if (size === 'Small'){
        if (colourEggs === 'Red'){
            sum = 9*countStacks;
        }else if (colourEggs === "Green"){
            sum = 8*countStacks;
        }else if (colourEggs === "Yellow"){
            sum = 5*countStacks;
        }
    }
    console.log(`${(sum*.65).toFixed(2)} leva.`);
}

solve(['Large', "Red", '7'])