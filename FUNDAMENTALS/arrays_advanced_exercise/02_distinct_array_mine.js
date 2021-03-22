function solve(arr =[]) {

    for (let i =0;i<arr.length;i++){
        let currEl = arr[i];
        for (let j = i+1;j<arr.length;j++){
            if (arr[i] === arr[j]){
                arr[j] = undefined;
            }
        }

    }
    let res = arr.filter(x=>x!==undefined).join(" ");
    console.log(res);

}

solve([20, 8, 12, 13, 4, 4, 8, 5])