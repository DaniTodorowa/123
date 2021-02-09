function solve(input) {
    let res = input.sort((a,b) => b-a);


    for (let i = 0; i<res.length;i+=2){
        let element = res.pop();
        res.splice((i+1),0,element);
    }

    console.log(res.join(" "));



}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])