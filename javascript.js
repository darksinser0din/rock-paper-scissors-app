palyGame();

function getComputerChoice() {
    let rnd = Math.floor(Math.random() * 3) + 1;
    let userChoice;
    switch(rnd){
        case 1:
            userChoice = "ROCK";
        break;
        case 2:
            userChoice = "PAPER";
        break;
        case 3:
            userChoice = "SCISSORS";
    }
    return userChoice;
}

function getHumanChoice() {
    let userChoice = prompt("Please Choose : Rock - Paper - Scissors");
    return userChoice.toUpperCase();
}

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice){
        console.log(userChoice + " OVER " + computerChoice + "! This is a draw!");
        return "draw"
    }else if(
        (userChoice === "ROCK" && computerChoice === "SCISSORS") 
        || (userChoice === "PAPER" && computerChoice === "ROCK") 
        || (userChoice === "SCISSORS" && computerChoice === "PAPER"))
    {
        console.log(userChoice + " OVER " + computerChoice + "! YOU WON");
        return "human"
    }else {
        console.log(userChoice + " OVER " + computerChoice + "! YOU LOST");
        return "computer"
    }
}

function showScore(humanScore, computerScore) {
    console.log("Your Score = " + humanScore + "\nComputer Score = " + computerScore);
}

function palyGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(userChoice, computerChoice);
        if(result === "human"){humanScore += 1;}else if(result === "computer"){computerScore += 1;}
    }
    showScore(humanScore, computerScore);
}