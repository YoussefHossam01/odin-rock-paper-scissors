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

alert(getComputerChoice());
alert(getUserChoice());