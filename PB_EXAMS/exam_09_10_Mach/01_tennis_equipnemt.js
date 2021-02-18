function solve(input) {
    let racket = Number(input.shift());
    let count_rackets = Number(input.shift());
    let shoes_count = Number(input.shift());
    let sum = 0;
    sum = count_rackets*racket + shoes_count*(racket/6) + (count_rackets*racket + shoes_count*(racket/6))/5;
    console.log(`Price to be paid by Djokovic ${Math.floor(sum/8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sum/8*7)}`);

}

solve([850,4,2]);