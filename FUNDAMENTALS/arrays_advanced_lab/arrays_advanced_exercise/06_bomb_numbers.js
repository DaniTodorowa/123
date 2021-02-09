function solve(arr, bombInfo) {
    let bomb = bombInfo[0];
    let range = bombInfo[1];

    let index = arr.indexOf(bomb); //return the first met index; if the index is out of length returns -1
    while (index> -1){
        arr.splice(Math.max((index-range),0),Math.min(range,index));// delete on the left or for negative index start from beginning;
        index = arr.indexOf(bomb);
        arr.splice(index, range+1);// remove the bomb, the elements also;
        index = arr.indexOf(bomb);


    }
    console.log(sumElements(arr));
    function sumElements(array){
        let sum = 0;
        for (let n of array){
            sum+=n;
        }
        return sum;
    }
}

solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)