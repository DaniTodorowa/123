function solve(input) {
    let salary = Number(input[1]);
    let num = Number(input[0]);
    for (i = 2; i <= num; i++) {
        if (input[i] === "Facebook") {
            salary -= 150;
        } else if (input[i] === "Instagram") {
            salary -= 100;
        } else if (input[i] === "Reddit") {
            salary -= 50
        }
        if (salary <0 || salary === 0){
            console.log("You have lost your salary." );
            {break;}
        }


    }
    if (salary > 0) {
        console.log(`${Math.trunc(salary)}`);
    }

}

solve(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]
)





