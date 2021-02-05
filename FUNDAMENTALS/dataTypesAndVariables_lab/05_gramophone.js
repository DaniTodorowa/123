function solve(name, album, song) {
    let duration = name.length*album.length*song.length/2;

    let res = Math.ceil(duration/2.5);
    console.log(`The plate was rotated ${res} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')