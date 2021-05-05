function solve(inputData) {
    // Mask - https://git.io/JfreM
    let html = '<table>\n'
    for(let row of inputData){
        let parsed = JSON.parse(row)
        html += '\t<tr>\n'
        html += '\t\t<td>' + parsed.name + '</td>\n'
        html += '\t\t<td>' + parsed.position + '</td>\n'
        html += '\t\t<td>' + parsed.salary + '</td>\n'
        html += '\t</tr>\n'
    }
    html += '</table>'
    return html;
}

console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));
