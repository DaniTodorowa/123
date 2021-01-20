function solve(input){
    let isSpecial = true;
    let special ='';
    let specialNums = '';
    let num = Number(input.shift());
    for (let i = 1111; i<=9999;i++){
        special = ''
        isSpecial = true;
        for (let j = 0;j<=3; j++){
            let numStr = i.toString();
            let divider = Number(numStr[j]);
            if (num%divider===0){
                special+=numStr[j];
            }else {
                isSpecial=false;

            }
        }
        if (isSpecial){
            specialNums+=special + " ";
        }

    }
    console.log(specialNums);
}
solve(['16'])