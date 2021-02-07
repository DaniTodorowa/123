function solve(product, quantity) {
    switch (product){
        case 'coffee':
            return (quantity*1.5).toFixed(2);
            break;
        case 'water':
            return (quantity*1).toFixed(2);
            break;
        case 'coke':
            return (quantity*1.4).toFixed(2);
            break
        default:
            return (quantity*2).toFixed(2);
    }
}
let res = solve('snacks', 2);
console.log(res);