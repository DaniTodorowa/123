function rotateArr(x=[],rotates) {


    for (let i = 0; i < rotates % x.length; i++)
        x.unshift(x.pop())

    console.log(x.join(' '))
}

rotateArr(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
)