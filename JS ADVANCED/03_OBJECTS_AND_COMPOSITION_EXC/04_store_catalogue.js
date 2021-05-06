function storeCatalogue(input) {
    // Mask - https://git.io/JfreS
    let catalogue = {};
    input.map(data => { catalogue[data.split(' : ')[0]] = Number(data.split(' : ')[1]); });
    console.log(catalogue);

    let letter = '' // Here We will keep the current letter to Print...

    // The sort method doesn't require a second argument for sort by value BUT it it's for testing :).
    // First, we will create Array from the KEYS of the Catalogue.
    Array.from(Object.keys(catalogue))
        // Then we will sort the ARRAY First Alphabetically and then if the names are the same: by value
        .sort((a, b) => { return a.localeCompare(b) || catalogue[a] - catalogue[b] })
        // And the we iterate the SORTED ARRAY element by element to print it.
        .map(product => {
            // But first we will check if the letter need's to be printed:
            if (product[0] !== letter) {
                letter = product[0];
                console.log(product[0]);
            }
            console.log(`  ${product}: ${catalogue[product]}`);  // And Finally we will print the output line.
        });
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])


