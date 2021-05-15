// function calc() {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     let result = Number(num1)+Number(num2);
//     document.getElementById("sum").value = result;
// }

function calc(){
    let first = document.getElementById('num1').value;
    let sec = document.getElementById('num2').value;
    res = Number(first)+ Number(sec);
    document.getElementById('sum').value= res;

}