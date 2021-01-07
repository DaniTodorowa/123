function area(type, a, b) {
    let result = 0
    if (type === "square"){
        result = Number(a*a);
        console.log(result.toFixed(3));
    }else if ( type === "rectangle"){
        result = Number(a)*Number(b);
        console.log(result.toFixed(3));

    }else if ( type === "circle") {
        result = Math.PI * Number(a * a);
        console.log(result.toFixed(3));
    }else if (type === "triangle"){
        result = Number(a)* Number(b)/2;
        console.log(result.toFixed(3));

    }
}
area("triangle", "4.5", "20")