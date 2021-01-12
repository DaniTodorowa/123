function solve(input){

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (i = 1; i<=Number(input[0]);i++){
        if (Number(input[i] < 200)){
            p1+=1;
        }else if (Number(input[i])===200 || Number(input[i])<= 399){
            p2+=1;
        }else if (Number(input[i])===400 || Number(input[i])<= 599){
            p3+=1;
        }else if (Number(input[i])===600 || Number(input[i])<= 799){
            p4+=1;
        }else if (Number(input[i])===800 || Number(input[i])>800){
            p5+=1;
        }
    }
    console.log(`${((p1/Number(input[0])*100).toFixed(2))}%`);
    console.log(`${((p2/Number(input[0])*100).toFixed(2))}%`);
    console.log(`${((p3/Number(input[0])*100).toFixed(2))}%`);
    console.log(`${((p4/Number(input[0])*100).toFixed(2))}%`);
    console.log(`${((p5/Number(input[0])*100).toFixed(2))}%`);

}

solve(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"]
)

