function solve(arr = []) {
    let result = true;
    let sumEl = arr[0].reduce((a, b) => (a + b), 0);
    for (let i = 1; i < arr.length; i++) {
        let currSumHor = arr[i].reduce((a, b) => (a + b), 0);
        if (currSumHor !== sumEl) {
            result = false;
            break;
        }
    }
    for(let j= 0;j<arr.length;j++){
        let currVer = 0;
        for(let m =0;m<arr.length;m++){
            //console.log(arr[m][j]);
            currVer+= arr[j][m];
        }
        if(currVer!== sumEl){
            result = false;
            break;
        }
    }
    console.log(result);

}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]



])