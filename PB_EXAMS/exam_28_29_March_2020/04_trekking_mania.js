function solve(...input){
    let countGroups = Number(input.shift());

    let Musala = 0;
    let Monblan = 0;
    let Calimandjaro = 0;
    let k2 = 0;
    let Everest = 0;
    let total = 0;

    for (let i =1; i<=countGroups;i++){
        let current = Number(input.shift());
        if (current <= 5){
            Musala+=current;
        }else if (current >= 6 && current <=12){
            Monblan += current;

        }else if (current >= 13 && current <=25){
            Calimandjaro += current;

        }else if (current >= 26 && current <=40){
            k2 += current;

        }else if (current>=41){
            Everest += current;

        }
        total = Musala + Monblan + Calimandjaro + k2 + Everest;
    }
    console.log(`${(Musala/total*100).toFixed(2)}%`);
    console.log(`${(Monblan/total*100).toFixed(2)}%`);
    console.log(`${(Calimandjaro/total*100).toFixed(2)}%`);
    console.log(`${(k2/total*100).toFixed(2)}%`);
    console.log(`${(Everest/total*100).toFixed(2)}%`);
}

solve(5,

    25,
    41,
    31,
    250,
    6)