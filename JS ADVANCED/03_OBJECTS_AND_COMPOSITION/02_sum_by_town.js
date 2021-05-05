function solve(input) {
    let towns ={};
    for (let i= 0;i<input.length;i+=2){
        let town = input[i];
        let numberPeople = Number(input[i+1]);
        !towns.hasOwnProperty(town) ? towns[town] = numberPeople: towns[town] += numberPeople;
    }
    console.log(JSON.stringify(towns));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])