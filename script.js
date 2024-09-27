// This function returns a random string be it rock, paper or scissors.

function getComputerChoice() {
    // Create an array to put our strings in it.
    const choices = ['rock', 'paper', 'scissors'];

    // Utilize the math.random function to get a random index
    // between 0 and 3.
    let choice = Math.floor(Math.random() * 3);

    // Return the random output
    return choices[choice];
}

// Get the user choice
function getUserChoice() {

    // Prompt the user for an input.
    let choice = prompt('Please enter your choice: "rock", "paper", or "scissors": ');
    choice = choice.toLowerCase();
    // Validate the input
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors") {

            choice = prompt('Please enter your choice: "rock", "paper", or "scissors": ');
    }

    // Return the user's choice
    return choice;
}

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
playRound(computerChoice, userChoice);


let computerScore = 0;
let userScore = 0;

// Determine the winner of each round and update the score
function playRound(computerChoice, userChoice){
    
    // Compare both choices, we know that rock beats scissors,
    // paper beats rock, and scissors beats paper, else a tie.

    if (computerChoice === userChoice)
    {
        console.log("It's a Tie!")
    }
    else if (computerChoice === "rock" && userChoice === "scissors" ||
             computerChoice === "paper" && userChoice === "rock"  ||
             computerChoice === "scissors" && userChoice === "paper")
    {
        console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
        computerChoice++;
    }

    else {
        console.log(`You win! ${userChoice} beats ${computerChoice}.`);
        userChoice++;
    }
}

