function concat(input){
    let years = input[2]
    let name = input[0];
    let surname = input[1];
    let city = input[3];
    console.log(`You are ${name} ${surname}, a ${years}-years old person from ${city}.`);
}

concat(["Stefi", "Ivanova", 23, "Sofia"])