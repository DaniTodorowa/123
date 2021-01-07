function passGuess(input) {
    let pass = "s3cr3t!P@ssw0rd";
    if (input === pass) {
        console.log("Welcome");
    }else {
        console.log("Wrong password!")
    }
}
passGuess("s3cr3t!P@ssw0rd")