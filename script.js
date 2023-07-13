//Create a function that randomly selects one of the values from a list of "rock", "paper", or "scissors"

function getComputerChoice(){
    //Create a list choices of rock, paper scissors
    let choices = ['rock', 'paper', 'scissors'];

    //Create a value that is randomly selected from the entire length of
    // the choices list to use as an index
    let index = Math.floor(Math.random()*choices.length);

    //index the choices list with the random index value so it returns a different
    //choice upon each call
    return choices[index];
}

// Write a function that plays a single round of Rock Paper Scissors with two parameters:
//playerSelection and computerSelection, and returns who won


function playRockPaperScissors(playerSelection) {
    //Create a variable to store the results of the computer's choice function
    let computerSelection = getComputerChoice();

    //Create a variable to store the player's inputted selection
    playerSelection = playerSelection.toLowerCase();

    //if the computer and play play the same choice, they tie
    if (playerSelection === computerSelection) {
        return `Computer played ${computerSelection}, it's a draw!`;
    //if the computer plays a choice that beats the player's choice, the computer wins
    } else if (playerSelection === 'rock' && computerSelection==='paper' || playerSelection === 'paper' && computerSelection==='scissors' ||playerSelection === 'scissors' && computerSelection==='rock'){
        //Make the first character in the sentence uppercase
        return `${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}, You lose! :C`
    // if the player plays a choice that beats the computer's choice, the player wins
    } else {
        //Make the first character in the sentence uppercase
        return `${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}, You win! :D`
    }
}