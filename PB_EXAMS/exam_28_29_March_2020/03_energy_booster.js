function solve(input){
    let fruit = input.shift();
    let size = input.shift();
    let countSets = Number(input.shift());
    let price = 0;
    if (size === 'small'){
        if (fruit==='Watermelon'){
            price = countSets*56;
        }else if (fruit=== 'Mango'){
            price = countSets*36.66;
        }else if (fruit=== 'Pineapple'){
            price = countSets*42.1;
        }else if (fruit=== 'Raspberry'){
            price = countSets*20;
        }
        price = price*2
    }else if (size ==='big'){
        if (fruit==='Watermelon'){
            price = countSets*28.7;
        }else if (fruit=== 'Mango'){
            price = countSets*19.6;
        }else if (fruit=== 'Pineapple'){
            price = countSets*24.8;
        }else if (fruit=== 'Raspberry'){
            price = countSets*15.2;
        }
        price = price*5
    }
    if (price >= 400 && price<=1000){
        price-= price*.15;
    }else if (price > 1000){
        price-=  price*.5;
    }
    console.log(`${price.toFixed(2)} lv.`);

}

solve(['Pineapple', 'small', 1
])