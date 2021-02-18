function solve(input) {
    let term = (input.shift());
    let typeContract = input.shift();
    let internet = input.shift();
    let countMonths = Number(input.shift());
    let sum = 0;
    let tax = 0;
    if (term ==='one'){
        if (typeContract === 'Small'){
            tax = 9.98;
            if (internet === 'yes'){
                if (tax<10 || tax===10){
                    tax+=5.5;
                }
            }

            sum = countMonths*(tax);

        }else if (typeContract === 'Middle'){
            tax = 18.99;
            if (internet === "yes"){
                if ((tax >10 && tax <30) || tax===30){
                    tax+=4.35;
                }
            }

            sum = countMonths*tax;
        }else if (typeContract === 'Large'){
            tax = 25.98;
            if (internet === 'yes'){
                if ((tax >10 && tax <30) || tax===30){
                    tax+=3.85;
                }
            }

            sum = countMonths*tax;
        }else if (typeContract === 'ExtraLarge'){
            tax = 35.99;
            if (internet === 'yes'){
                if (tax >30){
                    tax+=3.85;
                }
            }

            sum = countMonths*tax;
        }
    }else if (term === 'two'){
        if (typeContract === 'Small'){
            tax = 8.58;
            if (internet === 'yes'){
                if (tax<10 || tax===10){
                    tax+=5.5;
                }
            }

            sum = countMonths*(tax);

        }else if (typeContract === 'Middle'){
            tax = 17.09;
            if (internet==='yes'){
                if ((tax >10 && tax <30) || tax===30){
                    tax+=4.35;
                }
            }

            sum = countMonths*tax;
        }else if (typeContract === 'Large'){
            tax = 23.59;
            if (internet === 'yes'){
                if ((tax >10 && tax <30) || tax===30){
                    tax+=3.85;
                }
            }

            sum = countMonths*tax;
        }else if (typeContract === 'ExtraLarge'){
            tax = 31.79;
            if (internet === 'yes'){
                if (tax >30){
                    tax+=3.85;
                }
            }

            sum = countMonths*tax;
        }
        sum -= sum*.0375
    }
    console.log(`${sum.toFixed(2)} lv.`);


}

solve(['two','Small','yes',20])