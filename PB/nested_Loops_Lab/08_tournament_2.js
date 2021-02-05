function solve(input){
    let days = Number(input[0]);
    let counterWins = 0;
    let counterLose = 0;
    let donation = 0;
    let index =1;
    for (let i =1;i<=days;i++){
        let command = input[index++];
        let win =0;
        let lose =0;
        let dayDonation =0;
        while (command!=='Finish'){
            let rate = input[index++];
            switch (rate){
                case 'win':
                    win++;
                    counterWins++;
                    dayDonation+=20;
                    break;
                case 'lose':
                    lose++;
                    counterLose++;
                    break;
                case 'Finish':
                    break;

            }
            command = input[index++];
        }
        if (win>lose){
            dayDonation*=1.1;
            donation+=dayDonation;
        }else {
            donation+=dayDonation;
        }
    }
    if (counterWins>counterLose){
        donation*=1.2;
        console.log(`You won the tournament! Total raised money: ${donation.toFixed(2)}`);
    }else {
        console.log(`You lost the tournament! Total raised money: ${donation.toFixed(2)}`);
    }
}
solve((["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
)