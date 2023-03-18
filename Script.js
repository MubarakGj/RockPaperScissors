let options = ["ROCK", "PAPER", "SCISSORS"];
function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice (Rock/Paper/Scissors)").toUpperCase();
    while (!(playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "rock")) {
        playerChoice = prompt("Entered value is invalid. Please enter a valid choice (Rock/Paper/Scissors)")
    }
    return playerChoice;
}
function getComputerChoice() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 4);
    } while (randomNumber >= 3);
    let computerChoice = options[randomNumber];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    let message;
    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    message = `User's choice: ${playerChoice}, Computer's choice: ${computerChoice} \n`;
    switch (true) {
        case (playerChoice === "SCISSORS" && computerChoice === "PAPER"):
        case (playerChoice === "ROCK" && computerChoice === "SCISSORS"):
        case (playerChoice === "PAPER" && computerChoice === "ROCK"):
            message += `You Win!! ${playerChoice} beats ${computerChoice}`;
            break;
        case (playerChoice === "PAPER" && computerChoice === "SCISSORS"):
        case (playerChoice === "SCISSORS" && computerChoice === "ROCK"):
        case (playerChoice === "ROCK" && computerChoice === "PAPER"):
            message += `You Lose!! ${computerChoice} beats ${playerChoice}`;
            break;
        case (playerChoice === computerChoice):
            message += "Its a Tie!! Try again";
            break;
    }
    return message;
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        alert(result)
    }
    return;
}
console.log(game());