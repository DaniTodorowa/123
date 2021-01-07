function hoursReading(countPages, pagesPerHour, countDays){
    let res = parseInt(countPages)/parseInt(pagesPerHour)/parseInt(countDays)
    console.log(res)
}

hoursReading('432', "15",'4');