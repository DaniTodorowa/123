function projectCreate(input){
    let name = input[0];
    let count = Number(input[1]);
    console.log(`The architect ${name} will need ${count*3} hours to complete ${count} project/s.`)

}

projectCreate(['George', "4"])