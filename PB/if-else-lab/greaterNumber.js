// function greaterNumber(num1, num2){
//     num1 = Number(num1);
//     num2 = Number(num2);
//     if (num1 > num2) {
//         console.log(num1);
//
//     }else {
//         console.log(num2)
//     }
// }
// greaterNumber(8, 3)


function greaterNumber(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(Math.max(num1, num2))
}
greaterNumber(8, 3)