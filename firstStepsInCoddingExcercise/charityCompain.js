function totalSum(input){
    let daysCount = Number(input[0]);
    let cookers = Number(input[1]);
    let     cakes = Number(input[2]);
    let gofers = Number(input[3]);
   let pancakes = Number(input[4]);
    const total = daysCount* cookers*(cakes* 45 + gofers * 5.8 + pancakes* 3.2)
    const res = total - (total/8)
    console.log(res)

}
totalSum(["131", "5", "9", "33", "46"])