function solve(arr = []) {
    let res = []
   for (let i= 0;i<arr.length;i++){
       if(arr[i]<0){
           arr.unshift(arr[i])
       }else {
           arr.push(arr[i])
       }
   }
    console.log(arr);
}

solve([7, -2, 8, 9])