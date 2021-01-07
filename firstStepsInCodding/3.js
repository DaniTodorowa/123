function depositCalc(deposit, termOfDeposit, annualInterestRate) {
    let result = parseFloat(deposit) + parseInt(termOfDeposit) * ((parseFloat(deposit) * parseFloat(annualInterestRate)/100) / 12)
    console.log(result)
}

depositCalc('200', '3', '5.7');