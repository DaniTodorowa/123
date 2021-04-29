// function solve(arrayInput = []) {
//     let itemsList = arrayInput.shift();
//
//     let items = itemsList.split(" ");
//     while (arrayInput){
//         let data = arrayInput.shift().split(" ");
//         let command = data[0];
//         let tool = data[1];
//         if (command === "Buy"){
//             items.push(tool)
//         }else if (command === "Trash"){
//             let res = items.filter(x => x!==tool);
//             items = res;
//         }else if(command === "Upgrade"){
//             let curr = tool.split("-");
//             let search = curr[0];
//             if (items.indexOf(search)>=0){
//                 let index = items.indexOf(search);
//                 let leftArr = items.slice(0,index);
//                 let rightArr = items.slice(index+1,items.length);
//                 console.log(leftArr +', ' +search+ ", "+ rightArr);
//                 console.log(leftArr);
//                 console.log(rightArr);
//             }
//         }
//     }
//
//
//
// }
//
// console.log(solve(['SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel']
//
// ));

// function solve(input) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//
//         meow() {
//             console.log(`${this.name}, age ${this.age} says Meow`);
//         }
//     }
//
//     let cats = input.map(x => {
//         let [name, ageText] = x.split(" ");
//         let cat = new Cat(name, Number(ageText));
//         return cat;
//     })
//     cats.forEach(x => x.meow());
// }
//
// solve(['Mellow 2', 'Tom 5'])
function solve(input) {
    class Employee {
        constructor(name) {
            this.name = name;
            this.personalNum = name.length;
        }
        employees() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNum}`);
        }


    }

    input.map(x=>{
        let name = x;

        let Epl = new Employee(name);
        return Epl;
    }).forEach(x=>x.employees());

    // }input.map(x => {
    //     let [name, ageText] = x.split(" ");
    //     let cat = new Cat(name, Number(ageText));
    //     return cat;
    // }).forEach(x => x.meow()); // chaining
}
solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])