function solve(input) {
    let boughtFurniture = [];
    let totalMoneySpend = 0;
    for (let data of input){
        let match = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g.exec(data);
        //console.log(match);
        if(match){
            boughtFurniture.push(match.groups.name);
            totalMoneySpend+= Number(match.groups.price)* Number(match.groups.quantity);

        }
    }
    console.log('Bought furniture:');
    if (boughtFurniture.length>0) {
        console.log(boughtFurniture.join('\n'));

    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);

}

solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'Purchase']
)