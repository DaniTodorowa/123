function solve(arrInput =[]) {
    function oddPositionEl(arr){
        let res = [];
        for (let i =0;i<arr.length;i++){
            if(i%2 !== 0){
                res.push(arr[i]);
            }
        }
        return res;
    }

    function doubledEl(arr){
        return arr.map(x=>x*2);
    }

    function reversedEl(arr){
        let midIndex = Math.floor(arr.length/2);
        for (let i=0;i<midIndex;i++){
            let current = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length - 1 - i] = current;
        }
        return arr
    }
    let oddRes = oddPositionEl(arrInput);
    let doubleRes =  doubledEl(oddRes);
    let result = reversedEl(doubleRes);
    return result.join(" ");

}
solve([3, 0, 10, 4, 7, 3])