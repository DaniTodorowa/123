function solve(arr1=[],arr2=[]) {
    let res = []
    function evenIndex(i,arr1,res,arr2){
        if (i%2 === 0){
            return  res.push(Number(arr1[i])+Number(arr2[i]))
        }
    }
    function oddIndex(i,arr1,res,arr2){
        if (i%2 !== 0){
            return res.push((arr1[i])+(arr2[i]))
        }
    }
    for (let j = 0;j<arr1.length;j++){
        evenIndex(j,arr1,res,arr2)
        oddIndex(j,arr1,res,arr2)
    }
    console.log(res.join(" - "));
}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)