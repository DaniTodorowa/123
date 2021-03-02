function solve(input) {
    input.sort(sortedFunction);
    console.log(input.join('\n'));
    function sortedFunction(a,b){
        if (a.length>b.length){
            return 1;
        }else if (a.length<b.length){
            return -1;
        }else {
            return a.localeCompare(b);
        }
    }

}


solve(["Isacc", "Theodor", "Jack", "Harrison", "George",'Harry']);