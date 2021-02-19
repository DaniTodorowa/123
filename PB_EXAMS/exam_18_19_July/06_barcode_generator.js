function solve(input) {
    let firstStr = input.shift();
    let secStr = input.shift();
    let firsLists = [];
    let secList = [];
    let thirdList = [];
    let fourthList = [];
    let res = [];
    for (let i = Number(firstStr[0]); i<=Number(secStr[0]);i++){
        if ( i%2!==0){
            firsLists.push(i);
        }
    }
    for (let j = Number(firstStr[1]); j<=Number(secStr[1]);j++){
        if ( j%2!==0){
            secList.push(j);
        }
    }
    for (let k = Number(firstStr[2]); k<=Number(secStr[2]);k++){
        if ( k%2!==0){
            thirdList.push(k);
        }
    }
    for (let l = Number(firstStr[3]); l<=Number(secStr[3]);l++){
        if ( l%2!==0){
            fourthList.push(l);
        }
    }

    for  (let m = 0;m<firsLists.length;m++){
        let thousend = firsLists[m].toString();
        for (let n = 0;n<secList.length;n++){
            let hundred = secList[n].toString();
            for (let p = 0;p<thirdList.length;p++){
                let dozens = thirdList[p].toString();
                for (let q = 0;q<fourthList[q];q++){
                    let digits = fourthList[q].toString();
                    res.push(thousend + hundred + dozens +digits);
                }
            }
        }

    }
    console.log(res.join(" "));


}

solve([ '1365', '5877' ])