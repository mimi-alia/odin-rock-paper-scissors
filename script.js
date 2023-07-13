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