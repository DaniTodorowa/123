function solve(arrayOne =[], arrayTwo = []) {
    let resArray =[];
    arrayOne.map((element, i) => {
        i % 2 === 0 ?
            resArray.push(Number(element) + Number(arrayTwo[i])) :
            resArray.push(element + arrayTwo[i]);


    });
    console.log(resArray.join(" - "));

}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)