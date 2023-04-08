let options = ["ROCK", "PAPER", "SCISSORS"];
function getPlayerChoice(e) {
    return e.target.dataset.value;
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
    switch (true) {
        case (playerChoice === "SCISSORS" && computerChoice === "PAPER"):
        case (playerChoice === "ROCK" && computerChoice === "SCISSORS"):
        case (playerChoice === "PAPER" && computerChoice === "ROCK"):
            message = `You Win!! ${playerChoice} beats ${computerChoice}`;
            break;
        case (playerChoice === "PAPER" && computerChoice === "SCISSORS"):
        case (playerChoice === "SCISSORS" && computerChoice === "ROCK"):
        case (playerChoice === "ROCK" && computerChoice === "PAPER"):
            message = `You Lose!! ${computerChoice} beats ${playerChoice}`;
            break;
        case (playerChoice === computerChoice):
            message = "Its a Tie!! Try again";
            break;
    }
    message += `<br> User's choice: ${playerChoice}, Computer's choice: ${computerChoice}`;
    return message;
}

function game(e) {
        let playerChoice = getPlayerChoice(e);
        let computerChoice = getComputerChoice();
        let result = document.querySelector("#result");
        result.innerHTML = playRound(playerChoice, computerChoice);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('mouseover',()=>{
        button.classList.add("onhover");
    });
    button.addEventListener('mouseout',()=>{
        button.classList.remove("onhover");
    });
    button.addEventListener('click', game);
    
})