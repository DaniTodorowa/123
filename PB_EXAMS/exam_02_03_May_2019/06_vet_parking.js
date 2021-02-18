function solve(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let day_sum = 0;
    let total = 0;
    for (let i=1; i<= days; i++){
        day_sum = 0;
        for (let j = 1; j<= hours;j++){
            if (i % 2===0 && j%2 !==0) {
                day_sum += 2.5;
            }else if(i%2 !== 0 && j%2===0) {
                day_sum += 1.25;
            }   else {
                day_sum+=1;


            }

        }
        total+=day_sum;
        console.log(`Day: ${i} - ${day_sum.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

solve([5,2])