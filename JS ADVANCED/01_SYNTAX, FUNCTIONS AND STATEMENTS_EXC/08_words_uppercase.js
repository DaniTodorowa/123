function solve(input) {
    //console.log(input);
    let result =[]
    let res = [];
    let re = /\w+/g; //???(/[\W]+/)
    let found = '';
    let arr = input.split(' ');
    arr.forEach(r=>{
        found = r.match(re);
        res.push(found);

    });
    //console.log(res);
    let elNew ;
    for(let el of res){
        elNew = el[0].toUpperCase();
        result.push(elNew);
    }
    console.log(result.join(", "));
}

solve('hello')