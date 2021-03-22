function solve(input) {
    input.sort((a,b)=>b-a);
    let arr1 = input.slice(0, Math.floor(input.length/2));
    //console.log(arr1);
    let arr2= input.slice(Math.floor(input.length/2)).sort((a,b)=>a-b);
    //console.log(arr2);
    let res = [];
    while (Math.max(arr1.length,arr2.length)>0){
        res.push(arr1.shift());
        res.push(arr2.shift());
    }
    let result = res.filter(x=>x!==undefined).join(" ")
    console.log(result );
}

(solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94,5]));