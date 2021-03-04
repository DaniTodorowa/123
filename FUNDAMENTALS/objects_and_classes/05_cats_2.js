function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    input.map(x => {
        let [name, ageText] = x.split(" ");
        let cat = new Cat(name, Number(ageText));
        return cat;
    }).forEach(x => x.meow()); // chaining

}

solve(['Mellow 2', 'Tom 5'])