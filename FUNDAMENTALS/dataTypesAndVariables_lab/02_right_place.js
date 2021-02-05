function solve(word, char, result) {
   let res = word.replace('_', char);
   let output = res ===result ? 'Matched':'Not Matched';
    console.log(output);
}

solve('Str_ng', 'i', 'String')