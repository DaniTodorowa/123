// function solve( ...input) {
//     let num = Number(input.shift());
//     let res = [];
//     while (input.length > 0) {
//         let command = input.shift();
//         switch (command) {
//             case "chop":
//                 num = num/2;
//                  res.push(num);
//                  break;
//             case  "dice":
//                 num = Math.sqrt(num);
//                  res.push(num);
//                  break;
//             case "spice":
//                 num += 1
//                  res.push(num);
//                  break;
//             case "bake":
//                 num *= 3;
//                  res.push(num);
//                  break;
//             default :
//                 num *= .8
//                  res.push(num);
//                  break;
//         }
//
//     }
//     console.log(res.join("\n"));
// }
//
// (solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));

function solve(...input) {
    let arr = input;
    let num = Number(input.shift());
    let res =[]
    arr.forEach(x=>{
        switch (x){
            case "chop":
                num /= 2
                res.push(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                res.push(num);
                break;
            case "spice":
                num += 1;
                res.push(num); break;
            case "bake":
                num *= 3;
                res.push(num);break;
            default:
                num *= 0.8;
                res.push(num.toFixed(1));break;
        }
    })
    console.log(res.join('\n'));
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')