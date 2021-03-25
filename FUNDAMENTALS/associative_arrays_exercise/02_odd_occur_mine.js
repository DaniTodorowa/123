function solve(input) {
    let obj = {}
    let arr = input.toLowerCase().split(" ")
    arr.forEach(str => {
        if (!obj.hasOwnProperty(str)) {
            obj[str] = 0;
        }
        obj[str]++;


    });
    //console.log(obj);
    let output = [];
    let filetered = (Object.entries(obj).filter(entry => entry[1] % 2 !== 0));
    filetered.forEach(x=>output.push(x[0]));
    console.log(output.join(" "));





}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#")