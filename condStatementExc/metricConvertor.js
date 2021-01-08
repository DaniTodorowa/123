function metricConvert(arg1, from, to){
    let num = Number(arg1);
    let m1 = from;

    if (m1 === "mm"){
        if (to === "m"){
            console.log((num/1000).toFixed(3));
        }else if (to === "cm"){
            console.log((num/100).toFixed(3));
        }
    }else if ( m1 === "m"){
        if (to === "cm"){
            console.log((num*100).toFixed(3));
        }else if (to === "mm"){
            console.log((num*1000).toFixed(3));
        }
    }else if ( m1 === "cm") {
        if (to === "m") {
            console.log((num / 100).toFixed(3));
        } else if (to === "mm") {
            console.log((num * 10).toFixed(3));
        }
    }
}

metricConvert("45", "cm", "mm")