function solve(input) {
    let arr = input.shift();
    arr = arr.split(" ");
    arr = arr.map(x => Number(x))
    //console.log(arr);
    let maxPassCapacity = Number(input.shift());

    while (input.length > 0) {
        let data = input.shift().split(" ");
        //console.log(data);
        if (data.length === 2) {
            let addWagon = Number(data[1]);
            arr.push(addWagon)
            //console.log(addWagon);
        }else {
            let passNum = Number(data);
            for (let w = 0;w<arr.length;w++){
                if (arr[w] + passNum <=maxPassCapacity){
                    arr[w] += passNum;
                    break;
                }
            }
        }

    }
    console.log(arr.join(" "));
}

solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)