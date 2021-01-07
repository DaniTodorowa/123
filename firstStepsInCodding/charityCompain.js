function totalSum(daysCount, cookers, cakes, gofers, pancakes){
    const total = daysCount* cookers*(cakes* 45 + gofers * 5.8 + pancakes* 3.2)
    const res = total - (total/8)
    console.log(res)

}
totalSum("131", "5", "9", "33", "46")