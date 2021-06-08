function solve(arr, strSort) {
let result = [];
   if(strSort==='asc'){
       result = arr.sort((a,b)=>a-b);
   }else if(strSort==='desc'){
       result = arr.sort((a,b)=>b-a);
   }

    return (result);

}
solve([14, 7, 17, 6, 8], 'desc')