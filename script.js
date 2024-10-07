// To determine the maximum score
const maxScore = document.querySelector("input.score");

// Add eventlisteners to buttons
const rock = document.querySelector(".btn.rock");
const paper = document.querySelector(".btn.paper");
const scissors = document.querySelector(".btn.scissors");

// To display results
const roundResult = document.querySelector(".round.result");


// Allocate memory for both scores
let computerScore = 0;
let userScore = 0;

playGame();

// This function returns a random string be it rock, paper or scissors.
function getComputerChoice() {
    // Create an array to put our strings in it.
    const CHOICES = ['rock', 'paper', 'scissors'];

    // Utilize the math.random function to get a random index
    // between 0 and 3.
    let choice = Math.floor(Math.random() * 3);

    // Return the random output
    return CHOICES[choice];
}

// Start the game.
function playGame() {

    winningValue = +maxScore.value;
    console.log(winningValue)
    
    // Play the round determing user input based on which btn was clicked.
    while (computerScore !== winningValue && userScore !== winningValue)
    {
        rock.addEventListener("click", () =>{
            playRound("rock");
        });
    
        paper.addEventListener("click", () =>{
            playRound("paper");
        });
    
        scissors.addEventListener("click", () =>{
            playRound("scissors");
        });
    }
        announceWinner(computerScore, userScore);
}


// Determine the winner of each round and update the score
function playRound(userChoice) {

    let computerChoice = getComputerChoice();

    // Compare both choices, we know that rock beats scissors,
    // paper beats rock, and scissors beats paper, else a tie.

    if (computerChoice === userChoice) {
        roundResult.textContent = "It's a Tie!"
    }
    else if (computerChoice === "rock" && userChoice === "scissors" ||
        computerChoice === "paper" && userChoice === "rock" ||
        computerChoice === "scissors" && userChoice === "paper") {
            roundResult.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        computerScore++;
    }

    else {
         roundResult.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        userScore++;
    }
}


// Announce the Winner
function announceWinner(computerScore, userScore) {

    if (computerScore > userScore) {
        console.log(`You LOSE! Computer scored ${computerScore} and you scored ${userScore}.`);
    }
    else if (computerScore < userScore) {
        console.log(`You WIN! You scored ${userScore} and computer scored ${computerScore}.`);
    }
    else {
        console.log(`It's a TIE! You  both scored ${userScore}.`);
    }
}

