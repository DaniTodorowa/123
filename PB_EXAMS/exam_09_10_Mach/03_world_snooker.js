function solve(input) {
    let level = input.shift();
    let ticket = input.shift();
    let countTickets = Number(input.shift());
    let photo = input.shift();
    let sum = 0;
    if (ticket === "Standard"){
        if(level==="Quarter final"){
            sum = countTickets* 55.5;
        }else if(level === 'Semi final'){
            sum = countTickets* 75.88;
        }else if(level === 'Final'){
            sum = countTickets* 110.1;
        }
    }else if(ticket === 'Premium'){
        if(level==="Quarter final"){
            sum = countTickets* 105.2;
        }else if(level === 'Semi final'){
            sum = countTickets* 125.22;
        }else if(level === 'Final'){
            sum = countTickets* 160.66;
        }
    }else if(ticket === 'VIP'){
        if(level==="Quarter final"){
            sum = countTickets* 118.9;
        }else if(level === 'Semi final'){
            sum = countTickets* 300.4;
        }else if(level === 'Final'){
            sum = countTickets* 400;
        }
    }
    if (sum<=2500){
        if (photo==="Y"){
            sum+= countTickets*40;

        }
        console.log(sum.toFixed(2));

    }else if(sum>2500 && sum <= 4000){
        sum *= .9;
        if (photo==="Y"){
            sum+= countTickets*40;

        }
        console.log((sum).toFixed(2));
    }else if(sum>4000){
        console.log((sum *.75).toFixed(2));
    }
}

solve([ 'Final',
    'Premium',
    '25',
    'Y'
])