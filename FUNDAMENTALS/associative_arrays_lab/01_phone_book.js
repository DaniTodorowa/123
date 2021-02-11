function solve(input) {
    let phone_book = {};
    for (const line of input){
        let [name, phone] = line.split(' ');
        phone_book[name] = phone;
    }
    //console.log(phone_book);
    Object.keys(phone_book).forEach(key=> {
        console.log(`${key} -> ${phone_book[key]}`);
    })

}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)