function hoursReading(input){
    let countPages = Number(input[0]);
    let pagesPerHour =  Number(input[1]);
    let countDays = Number(input[2]);
    let res = (countPages)/(pagesPerHour)/(countDays)
    console.log(res)
}

hoursReading(['432', "15",'4']);