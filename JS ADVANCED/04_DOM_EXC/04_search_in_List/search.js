// function search() {
//     const listItems = document.querySelectorAll('#towns>li');
//     let input = document.querySelector('input').value;
//     let result = document.getElementById("result");
//     let sum = 0;
//
//     for (let li of listItems) {
//         if ((li.textContent).toLowerCase().includes(input.toLowerCase())) {
//             li.style.fontWeight = 'bold';
//             li.style.textDecoration = 'underline';
//             sum++;
//         }else {
//             li.style.fontWeight = '';
//             li.style.textDecoration = ''
//         }
//     }
//     result.textContent = `${sum} matches found`
//
// }
//


function search() {
    const input = document.getElementById('searchText').value;
    const textResult = document.getElementById('result');
    let counter = 0;
    let towns = document.querySelectorAll('ul li');
    for (let t of towns) {
        if (t.textContent.toLowerCase().includes(input.toLowerCase())) {
            counter++;
            t.style.fontWeight = 'bold';
            t.style.textDecoration = 'underline';
        } else {
            t.style.fontWeight = '';
            t.style.textDecoration = '';
        }
    }
    textResult.textContent = `${counter} matches found`
}