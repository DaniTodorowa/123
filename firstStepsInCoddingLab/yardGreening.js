function yardGreening(input){
    let squareMetres = Number(input[0]);
    let totalPrice = squareMetres*7.61;
    let discount = totalPrice*.18;
    console.log(`The final price is: ${(totalPrice-discount).toFixed(2)} lv.`)
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}

yardGreening(["550"])