function solve(input) {
    let heroes = [];
    let hero = {};
    while (input.length > 0) {
        let line = input.shift().split(" / ");
        //console.log(line);
        let name = line[0];
        let level = Number(line[1]);
        let items = line[2];
        //console.log(items);
        let hero = {
            name: name,
            level: level,
            items: items
                .split(", ")
                .sort((a, b) => a.localeCompare(b))
                .join(", "),
        }
        heroes.push(hero)
    }
    heroes.sort((hero1, hero2)=>{
        return hero1.level - hero2.level;
    });
    let output = [];
    for (const  hero of heroes){
        let str = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`;
        output.push(str);
    }
    return output.join("\n")


}


console.log(solve(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"

]));