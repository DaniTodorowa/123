function solve(input){
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrived = Number(input[2]);
    let minArrived = Number(input[3]);
    let tlMinExam = hourExam*60 + minExam;
    let tlMinArrived = hourArrived * 60 + minArrived;
    let diffMin = Number((tlMinArrived - tlMinArrived)%60);

    if (tlMinExam === tlMinArrived) {
        console.log(`On time`);
    }else if ((tlMinExam - tlMinArrived) <= 30 && (tlMinExam - tlMinArrived) >0){
        console.log(`On time`);

        console.log(`${Math.abs(tlMinArrived-tlMinExam)} minutes before the start`);


    }else if(tlMinExam < tlMinArrived){
        if (tlMinArrived - tlMinExam < 60){
            console.log(`Late`);
            console.log(`${(tlMinArrived-tlMinExam)} minutes after the start`);
        }else if(tlMinArrived - tlMinExam >= 60){
            console.log(`Late`);
            console.log(`${(Math.trunc((tlMinArrived-tlMinExam)/60))}:${(tlMinArrived - tlMinExam)%60} hours after the start`);
        }
    }else if(tlMinExam > tlMinArrived){
        if (( tlMinExam - tlMinArrived) < 60){
            console.log(`Early`);
            console.log(`${Math.abs(tlMinArrived-tlMinExam)} minutes before the start`);
        }else if( (tlMinExam - tlMinArrived) >= 60){

            console.log(`Early`);
            if (Math.abs(tlMinArrived - tlMinExam)%60 >= 10){
                console.log(`${Math.abs(Math.trunc((tlMinArrived-tlMinExam)/60))}:${Math.abs((tlMinArrived - tlMinExam)%60)} hours before the start`);
            }else {
                console.log(`${Math.abs(Math.trunc((tlMinArrived-tlMinExam)/60))}:0${Math.abs((tlMinArrived - tlMinExam)%60)} hours before the start`);

            }
        }
    }
}






solve(['11','30','8','12'])