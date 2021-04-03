function solve(arr = []) {
    let num = Number(arr.shift());
    let res = [];
    while (arr.length > 0) {
        let command = arr.shift();
        switch (command) {
            case "chop":
                num = num/2;
                 res.push(num);
                 break;
            case  "dice":
                num = Math.sqrt(num);
                 res.push(num);
                 break;
            case "spice":
                num += 1
                 res.push(num);
                 break;
            case "bake":
                num *= 3;
                 res.push(num);
                 break;
            default :
                num *= .8
                 res.push(num);
                 break;
        }

    }
    console.log(res.join("\n"));
}

(solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));