function solve(input){
    let restMoney = Number(input).toFixed(2);
    let counterCoins = 0;
    while (restMoney>0){

            if (restMoney>=2){
                counterCoins++;
                restMoney=(restMoney-2).toFixed(2);

            }else if (restMoney>=1 && restMoney<2){
                counterCoins++;
                restMoney=(restMoney-1).toFixed(2);

            }else if (restMoney>=.5 && restMoney<1){
                counterCoins++;
                restMoney=(restMoney-.5).toFixed(2);
            }else if (restMoney>=.2 && restMoney<.5){
                counterCoins++;
                restMoney-=0.2.toFixed(2);
            }else if (restMoney>=.1 && restMoney<.2){
                counterCoins++;
                restMoney=(restMoney-.1).toFixed(2);
            }else if (restMoney>=.05 && restMoney<.1){
                counterCoins++;
                restMoney=(restMoney-.05).toFixed(2);
            }else if (restMoney>=.02 && restMoney<.05){
                counterCoins++;
                restMoney=(restMoney-.02).toFixed(2);
            }else if (restMoney>=0.01 && restMoney<.02){
                counterCoins++;
                restMoney=(restMoney-.01).toFixed(2);
            }else {
                {break;}
            }
        }



    console.log(counterCoins);


}
solve((["2.24"]))
