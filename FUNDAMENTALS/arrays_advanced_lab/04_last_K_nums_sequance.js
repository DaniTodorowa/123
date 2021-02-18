function solve(a, b) {
    let countback = b
    let nums =[1];
    let length = a;
    let  sumEl = (x, y) => x+y;

    for (let i = 0; i<a-1; i++){
        let res = 0;
        if (nums.length < countback){
            res = nums.reduce((n, m) => n+m);
            console.log(res);
            nums.push(res);
        }else {
            let startSlisingIndex = nums.length -b -1
            let currArray = nums.slice(nums[startSlisingIndex])
            console.log(currArray);
            res = currArray.reduce((n,m) => m+n);
            nums.push(res);
        }


    }
    console.log(nums);


}

solve(8,2)