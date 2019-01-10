'use strict';
(function()
{
$(document).ready(function(){

//This creates the random variable for the game.
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("generatedNumber: " + randomNumber);

//This is the static number of guesses
var numberOfGuesses = document.getElementById("guessesLeft");
numberOfGuesses.value = 6;

//this function plays the main part of the game.
document.getElementById("guess").onclick = function guess()
{
    
    var userGuess = document.getElementById("userGuess").value;
    if(userGuess < 0 || userGuess > 100)
    {
        $('#answer').text("kies een getal tussen 1 en 100");
        numberOfGuesses.value++;
    }
    else if(numberOfGuesses.value == 1 && randomNumber != userGuess)
    {
        $("#answer").text("U heef geen kansen meer het antwoord was " + randomNumber + ". klik op reset om opnieuw te proberen");
        $('#guess').hide();
        $('#reset').show();
      
    }
    else if(randomNumber == userGuess)
    {
        $("#answer").text("Juist !!! klik op resetom opnieuw te proberen");
        $('#guess').hide();
        $('#reset').show();
    }
    else if(userGuess > randomNumber && userGuess > randomNumber + 20)
    {
        $("#answer").text("veel te hoog");
    }
    else if(userGuess > randomNumber)
    {
        $("#answer").text("te hoog");
    }
    else if(userGuess < randomNumber && userGuess < randomNumber - 20)
    {
        $("#answer").text("veel te laag");
    }
    else
    {
        $("#answer").text("te laag")    
    }
  
    numberOfGuesses.value--;
}

//This function resets the game to default by reloading the page.    
document.getElementById("reset").onclick = function reset()
{
    location.reload(true);
}
 });
}());