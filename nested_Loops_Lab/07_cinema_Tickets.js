function solve(input) {
    let studentsCount = 0;
    let standardCount = 0;
    let kidCount = 0;
    let index = 0;
    let command = input[index++]
    let isFinished = false;

    while (command !== 'Finish') {
        let nameMovie = input[index - 1];
        let movieCounter = 0;

        let freeSeats = Number(input[index++]);

        let type = input[index++]
        while (type !== "End") {
            if (type === "standard") {
                standardCount++;
                movieCounter++;
            } else if (type === 'kid') {
                kidCount++;
                movieCounter++;
            } else if (type === 'student') {
                studentsCount++;
                movieCounter++;
            } else if (type === "Finish") {
                isFinished = true;
                break;
            }
            if (isFinished ===false){
                type = input[index++];
            }else {
                break
            }



        }


        console.log(`${nameMovie} - ${((movieCounter / freeSeats) * 100).toFixed(2)}% full.`);
        if (isFinished === false){
            command = input[index++];
        }else {
            break;
        }
    }
    let total = kidCount + standardCount + studentsCount;
    console.log(`Total tickets: ${total}`);
    console.log(`${(((studentsCount / total)) * 100).toFixed(2)}% student tickets.`);
    console.log(`${(((standardCount / total)) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(((kidCount / total)) * 100).toFixed(2)}% kids tickets.`);
}

solve((["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
)