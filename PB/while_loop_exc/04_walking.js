function solve(input){
    let data =input;
    let index = 0;
    let sumSteps = 0;
    while (index<data.length){
        if (data[index]!== 'Going home'){
            sumSteps+=Number(data[index]);
            index++;
        }else if(data[index]=== "Going home"){
            sumSteps+=Number(data[index+1]);{break;}
        }
    }
    if (sumSteps>=10000){
        console.log("Goal reached! Good job!");
        console.log(`${Math.abs(sumSteps-10000)} steps over the goal!`);
    }else {
        console.log(`${Math.abs(sumSteps-10000)} more steps to reach goal.`);
    }
}
solve((["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])
)