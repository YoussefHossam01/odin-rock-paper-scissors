// This function returns a random string be it rock, paper or scissors.

function getComputerChoice(){
    // Create an array to put our strings in it.
    const choices = ['rock', 'paper', 'scissors'];

    // Utilize the math.random function to get a random index
    // between 0 and 3.
    let choice = Math.floor(Math.random() * 3);

    // Return the random output
    return choices[choice];
}

alert(getComputerChoice());