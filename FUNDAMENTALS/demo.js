let text = 'Lorem Ipsum is simply dummy ';
let patternLiteral = /[A-Z][a-z]+/g;

let res = text.match(patternLiteral);
console.log(res); //->> returns matches