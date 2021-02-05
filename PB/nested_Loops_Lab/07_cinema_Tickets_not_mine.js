function solve(input) {
    let index = 0;
    let standartTickets = 0;
    let studentTickets = 0;
    let kidsTickets = 0;

    let inputLine = input[index++];

    while (inputLine !== "Finish") {
        let mooveName = inputLine;
        let ticketCount = Number (input[index++]);
        let availableTickets = ticketCount;

        let ticketType = input[index++];

        while (ticketType !== "End") {
            if (ticketType === "standard") {
                standartTickets++;
            } else if (ticketType === 'kid') {
                kidsTickets++;
            } else {
                studentTickets++;
            }

            availableTickets--;

            if (availableTickets === 0) {
                break;
            }

            ticketType = input[index++];


        }
        let boughtTickets = ticketCount - availableTickets;
        let percent = boughtTickets / ticketCount * 100;
        console.log(`${mooveName} - ${percent.toFixed(2)}% full.`);

        inputLine = input[index++];
    }

    let totalTickets = standartTickets + studentTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / totalTickets *100).toFixed(2)}% kids tickets.`);

}