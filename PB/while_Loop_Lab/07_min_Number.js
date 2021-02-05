function solve(input){
    let nums = input;
    let counter = 0;
    let minNum =  Math.pow(2, 53);
    while ((nums[counter]) !== "Stop"){
        if(Number(nums[counter])< minNum){
            minNum = Number(nums[counter]);
            counter++;
        }else {
            counter++;
        }
    }
    console.log(minNum);
}

solve((["100",
    "99",
    "80",
    "70",
    "Stop"])
)