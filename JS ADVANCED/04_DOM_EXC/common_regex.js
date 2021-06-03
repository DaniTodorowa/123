function extract(content) {

    let textElement = document.getElementById('content').textContent;

    let regex = /[(][A-Z{ }a-z]*[)]/g;
    let regexTwo = /[^()]+/g;
    let result = '';

    let firstMatch = textElement.match(regex);

    for (const match of firstMatch) {
        result += match;
    }
    let finalMatch = result.match(regexTwo).join('; ');
    return finalMatch;
}