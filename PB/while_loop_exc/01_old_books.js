function solve(input){
    let data = input;
    let searchedBook = input[0];
    let index = 1;
    let isFound = false
    while (data[index]!== "No More Books"){
        if (data[index] === searchedBook){
            isFound = true
            console.log(`You checked ${index-1} books and found it.`);{break;}
        }else {
            index++;
        }
    }
    if (isFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index-1} books.`);
    }
}

solve((["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
)