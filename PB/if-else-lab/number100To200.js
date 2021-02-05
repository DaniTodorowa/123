function demo(input){
    let number = Number(input);
    if (number < 100){
        console.log("Less than 100");
    }else if (number <= 200 && number >= 100) {
        console.log("Between 100 and 200");


    }else {
        console.log("Greater than 200");
    }
}
demo("-201")