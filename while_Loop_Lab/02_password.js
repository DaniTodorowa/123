function solve(input){
    let name = input[0];
    let pass = input[1];
    let suggPass = input[2];
    let counter = 2;
    while (suggPass !== pass){
        suggPass = input[counter];
        counter++;
    }
    console.log(`Welcome ${name}!`);
}
solve(["Nakov",
        "1234",
        "Pass",
        "1324",
        "1234"]
)