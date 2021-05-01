function addAndRemoveElements(commands=[]) {
    let array = [];
    let number = 1;
    commands.forEach((command, index) => {
        command === 'add' ? array.push(number) : array.pop();
        number++;
    })
    array.length > 0 ? console.log(array.join('\n')) : console.log('Empty');
}

addAndRemoveElements([
    'add',
    'add',
    'add',
    'add'
]);