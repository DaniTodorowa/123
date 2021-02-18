function solve(input) {
    let tlCount = Number(input.shift());
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let protShake  = 0;
    let protBar = 0;
    for (let i=0; i<=tlCount;i++){
        let data = input.shift();
        if (data==="Back"){
            back++;
        }else if(data==="Chest"){
                chest++;
        }else if(data==="Legs"){
            legs++;
        }else if(data==="Abs"){
            abs++;
        }else if(data==="Protein shake"){
            protShake++;
        }else if(data==="Protein bar"){
            protBar++;
        }
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${protShake} - protein shake`);
    console.log(`${protBar} - protein bar`);
    console.log(`${((back+chest+legs+abs)/tlCount*100).toFixed(2)}% - work out`);
    console.log(`${((protBar+protShake)/tlCount*100).toFixed(2)}% - protein`);
}

solve([
    '10',          'Back',
    'Chest',       'Legs',
    'Abs',         'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs',         ''])