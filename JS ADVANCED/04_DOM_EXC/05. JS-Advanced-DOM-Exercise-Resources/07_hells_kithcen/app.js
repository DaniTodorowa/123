function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let input = document.querySelector('#inputs>textarea').value;

    function onClick() {
        let arr = JSON.parse(input.value);
        let restaurant = {};
        arr.forEach((line)=>{
            const tokens = line.split(" - ");
            const name = tokens[0];
            const workersArr = tokens[1].split(", ");
            let workers = {};
            for(let worker of workersArr){
                let workerTokens = worker.split(" ");
                workers.push({
                    name:workerTokens[0],
                    salary:Number(workerTokens[1]),
                })
            }

        });

    }
}

// ["PizzaHut - Peter 500, George 300, Mark 800",
//    "TheLake - Bob 1300, Joe 780, Jane 660"]

