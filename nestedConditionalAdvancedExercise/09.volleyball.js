function solve(input){
    let year = input[0];
    let countHolidays = Number(input[1]);
    let countProvince = Number(input[2]);
    let saturdays = (3/4*(48 - countProvince));
    let holidays = (2/3*countHolidays);

    let result = saturdays + holidays + countProvince ;
    if (year === "leap"){
        result +=result*.15;
        console.log(Math.floor(result));
    }else if (year=== 'normal'){
        console.log(Math.floor(result));
    }
}

solve(['leap', '2', '3'])