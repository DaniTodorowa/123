function solve(arr = []) {
    let arr1 = arr.slice();
    function evenAndOdd(a, index){

        return a%2 === 0 ? a + index: a-index
    }

    function sumNums(arr=[]){
        const reducer = (acc, currVal) => acc+currVal;
        return arr.reduce(reducer)
    }
    for (let i = 0;i<arr.length;i++){
        arr1[i] = evenAndOdd( arr[i],i)

    }
    console.log(arr1);
    console.log(sumNums(arr));
    console.log(sumNums(arr1));

}

solve([5, 15, 23, 56, 35])