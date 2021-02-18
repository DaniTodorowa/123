function solve(input) {
    let num = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i<= num; i++){
        let curr_num = Number(input.shift());
        if (curr_num % 2 === 0){
            p1++;
        }
        if (curr_num%3 === 0){
            p2++;
        }
        if (curr_num%4 ===0){
            p3++;
        }
    }
    console.log(`${(p1/num*100).toFixed(2)}%`);
    console.log(`${(p2/num*100).toFixed(2)}%`);
    console.log(`${(p3/num*100).toFixed(2)}%`);

}

solve([3,3,6,9])