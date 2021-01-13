function solve(input){
    let nums = input;
    let counter = 0;
    let maxNum = - Math.pow(2, 53);
    while ((nums[counter]) !== "Stop"){
        if(Number(nums[counter])> maxNum){
            maxNum = Number(nums[counter]);
            counter++;
        }else {
            counter++;
        }
    }
    console.log(maxNum);
}
solve((["-1",
    "-2",
    "Stop"])
)