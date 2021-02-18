function solve(input) {
    let count =  Number(input.shift());
    let sugarGr = 0;
    let flourGr = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 1; i<=count;i++){
        let currSug = Number(input.shift());
        if (currSug>maxSugar){
            maxSugar = currSug;
        }
        sugarGr+= currSug;
        let currFl = Number(input.shift());
        if (currFl>maxFlour){
            maxFlour = currFl;

        }
        flourGr+=currFl;


    }
    console.log(`Sugar: ${Math.ceil(sugarGr/950)}`);
    console.log(`Flour: ${Math.ceil(flourGr/750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);


}
solve([3,400,350,250,300,450,380])