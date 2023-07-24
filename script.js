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



function playRockPaperScissors(playerSelection, computerSelection) {
    //Create a variable to store the results of the computer's choice function

    let result = '';

    //if the computer and play play the same choice, they tie
    if (playerSelection === computerSelection) {
        // return `Computer played ${computerSelection}, it's a draw!`;
        result+='draw'
    //if the computer plays a choice that beats the player's choice, the computer wins
    } else if (playerSelection === 'rock' && computerSelection==='paper' || playerSelection === 'paper' && computerSelection==='scissors' ||playerSelection === 'scissors' && computerSelection==='rock'){
        //Make the first character in the sentence uppercase
        // return `${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}, You lose! :C`
        result+='lose'
    // if the player plays a choice that beats the computer's choice, the player wins
    } else {
        //Make the first character in the sentence uppercase
        // return `${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}, You win! :D`
        result+='win'
    }
    return result
}

//Write a function that plays a 5 round game that keeps score and reports a winner or loser at the end.
    // Retrieve player information from a prompt

function playRound(){
    //Create a counter to store how many rounds have been played in a game
    let matchCounter = 0;
    //Create a counter to store player wins
    let playerWins = 0;
    //Create a counter to store computer wins
    let computerWins = 0;


    //Prompt the player's input 5 times, update the win point and notify results each time
    while(matchCounter < 5){
        //retrieve player input from a prompt
        let playerSelection = prompt('Rock, paper, or scissors?').toString().toLowerCase();

        //retrieve computer selection
        let computerSelection = getComputerChoice();

        //play the game and store results 
        let gamePoint = playRockPaperScissors(playerSelection, computerSelection);


        // Show the player results of the game
        if(gamePoint === 'draw'){
            console.log(`Computer played ${computerSelection}, it's a draw!`);
        } else if (gamePoint === 'lose') {
            computerWins++
            console.log(`${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}, You lose! :C`);
        } else {
            playerWins++
            console.log(`${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}, You win! :D`);
        }
        // matchCounter++
    }

    // // Show the player who won based on values stored in the win counters
    // if (playerWins > computerWins){
    //     console.log('You Won')
    // } else if (computerWins > playerWins){
    //     console.log('Computer won')
    // } else {
    //     console.log('It\'s a draw')
    // }

}

window.addEventListener('DOMContentLoaded', () => {
var buttons = document.querySelectorAll('.button');
alert(buttons);
buttons.forEach(  function(button) {
    console.log(button);
  button.addEventListener('click', getComputerChoice);})
});
