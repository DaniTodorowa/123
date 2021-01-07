function volumeNet(length, width, high, percent){
    const ln = length/10
    const w = width/10
    const h = high/10
    const vol = ln * w * h
    const volWithoutOthers = vol - vol * percent/100
    console.log(volWithoutOthers)
}
volumeNet("105", "77", "89", "18.5")