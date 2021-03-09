function solve(arr = []) {
    let resArr = [];
    for (let i=0; i<arr.length;i++){
        let isTopInt = true;
        let currentEl = arr[i];
        let rightElArray = arr.slice((i+1));

        for (let j = 0;j<rightElArray.length;j++){
            if(currentEl<=rightElArray[j]){
                isTopInt = false;
                break;
            }
        }
        if (isTopInt===true){
            resArr.push(currentEl)
        }
    }
    console.log(resArr.join(' '));
}

solve([1, 4, 3, 2])