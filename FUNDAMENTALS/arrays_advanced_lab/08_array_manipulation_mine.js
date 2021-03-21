function solve(arr = []) {
    let arr1 = arr.shift().split(" ");


    while (arr.length > 0) {
        let data = arr.shift().split(" ");
        let [command, number] = [data[0], Number(data[1])];
        if (data.length === 3) {//insert
            arr1.splice(Number(data[2]),0,number.toString())
            //console.log(arr1);
        } else {
            if (command === "Add") {
                arr1.push(number.toString());
                //console.log(arr1);
            } else if (command === "Remove") {
                let index = arr1.indexOf(number.toString())
                if (index > -1) {
                    arr1.splice(index,1);
                    //console.log(arr1);
                }

            }else if(command === "RemoveAt"){
                arr1.splice(number,1);
                //console.log(arr1);
            }

        }

    }
    console.log(arr1.join(' '));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])