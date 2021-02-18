function solve(input){
    let days = Number(input.shift());
    let food = Number(input.shift());
    let dogFoodTl = 0;
    let catFoodTl =0;
    let dogFood = 0;
    let catFood = 0;
    let dayFood = 0;
    let totalFood =0;
    let biscuits = 0;
    for (let d =1; d<=days;d++){
        dogFood = Number(input.shift());
        catFood = Number(input.shift());
        dogFoodTl+=dogFood;
        catFoodTl+=catFood;
        dayFood = dogFood + catFood;
        if (d % 3 ===0){
            biscuits+= dayFood*.1;
        }
        totalFood+=dayFood;
    }
    console.log(`Total eaten biscuits: ${Math.floor(biscuits)}gr.`);
    console.log(`${(totalFood/food*100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dogFoodTl/totalFood*100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(catFoodTl/totalFood*100).toFixed(2)}% eaten from the cat.`);
}
solve([3, 1000,300, 20,100,30,110,40])