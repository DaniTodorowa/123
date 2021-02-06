function solve(num) {

    for (let first = 0;first<3; first++){

        let letter1 = String.fromCharCode(97 + first);

        for (let sec = 0;sec<3; sec++){
            let letter2 = String.fromCharCode(97 + sec);

            for (let third = 0;third<3; third++){

                let letter3 = String.fromCharCode(97 + third);

                console.log(`${letter1}${letter2}${letter3}`);


            }





        }



    }

}

solve(3)

