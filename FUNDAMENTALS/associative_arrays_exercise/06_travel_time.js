function solve(input) {
    let countriesObj = {};
    input.forEach(x=>{
        let [country, town, price] = x.split(" > ");
        if (!countriesObj.hasOwnProperty(country)){
            countriesObj[country] = {};
            countriesObj[country][town] = Number(price);
        }else {
            if(!countriesObj[country].hasOwnProperty(town)){
                countriesObj[country][town] =++ price;
            }else {
                if (price<countriesObj[country][town]){
                    countriesObj[country][town] = ++price;
                }
            }
        }
    });

     for (const country of Object.keys(countriesObj).sort((a,b)=>a.localeCompare(b))){
         let result = `${country} -> `;
         for (let city of Object.keys(countriesObj[country]).sort((a,b)=>
             countriesObj[country][a] - countriesObj[country][b])){
             result += `${city} -> ${countriesObj[country][city]} `
         }
         console.log(result);

     }
}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])