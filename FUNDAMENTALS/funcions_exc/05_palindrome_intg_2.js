function solve(arr = []) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].toString();
        let miidleL = Math.floor(current.length / 2);
        if (current.length === 1) {
            res.push("true");

        } else {
            let isPali = true;
            for (let j = 0; j < miidleL; j++) {
                if (current[j] !== current[current.length - 1 - j]) {
                    isPali = false;
                    res.push("false")
                    break;
                }
            }
            if (isPali) {
                res.push("true");
            }
        }
    }
    return res.join('\n');
}

console.log(solve([32,2,232,1010]));