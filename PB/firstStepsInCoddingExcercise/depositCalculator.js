function depositCalc(input) {
    let deposit = Number(input[0]);
    let termOfDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let result = (deposit) + (termOfDeposit) * (((deposit) * (annualInterestRate)/100) / 12)
    console.log(result)
}

depositCalc(['200', '3', '5.7']);