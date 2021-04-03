function solve(input) {


    function sumEl(arr) {
        return arr.reduce((a, b) => a + b, 0)
    }

    function averageEl(arr) {
        let sum = 0;
        for (let i=0;i<arr.length;i++){
            sum += 1/arr[i];
        }
        return sum;

    }
    function  concatEl(arr){
        // let result = [];
        // arr.forEach(x=> {
        //     result.push(x)
        // })
        // return result
        //     .join("");
        return arr.reduce((a,b)=>a+b, "")
    }

    console.log(sumEl(input));
    console.log(averageEl(input));
    console.log(concatEl(input));
}

solve([2,4, 8,16])