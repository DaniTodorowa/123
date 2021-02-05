function solve(input){
    let hour = Number(input[0]);
    let day = input[1];
    if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === "Thursday" || day === 'Friday' || day === 'Saturday') && (10<=hour && hour<=18)){
        console.log('open')
    }else {
        console.log('closed')
    }
}

solve(['19', 'Friday'])