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

// Start the game.
function playGame(){
    
    // Ask user for number of rounds.
    let rounds = +prompt("Welcome to our game!\nPlease enter the number of rounds you'd like to play: ");

    // Allocate memory for both inputs
    let computerChoice = 0;
    let userChoice = 0;

    // Allocate memory for both scores
    let computerScore = 0;
    let userScore = 0;


    // Play the game the required number of rounds.
    for (let i = 0; i < rounds; i++){
        
        // Get both inputs.
        computerChoice = getComputerChoice();
        userChoice = getUserChoice();

        // Announce the winner of the round and save the score.
        playRound(computerChoice, userChoice);
    }

    // Announce the winner.
    anounnceWinner(computerScore, userScore);

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
            computerScore++;
        }

        else {
            console.log(`You win! ${userChoice} beats ${computerChoice}.`);
            userScore++;
        }
    }

    // Announce the Winner
    function anounceWinner(computerScore, userScore){
        
        if (computerScore > userScore){
            console.log(`You LOSE! Computer scored ${computerScore} and you scored ${userScore}.`);
        }
        else if (computerScore < userScore)
        {
            console.log(`You WIN! You scored ${userScore} and computer scored ${computerScore}.`);
        }
        else {
            console.log(`It's a TIE! You  both scored ${userScore}.`);
        }
    }
}
