function volumeNet(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3]);



    const ln = length/10
    const w = width/10
    const h = high/10
    const vol = ln * w * h
    const volWithoutOthers = vol - vol * percent/100
    console.log(volWithoutOthers)
}
volumeNet(["105", "77", "89", "18.5"])