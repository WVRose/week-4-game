//3. Here's how the app works:

//  * The player will be shown a random number at the start of the game.
//create random number WinningNumber (the goal points) at the beginning of the game
//get random number for each gem at the beginning of the game

//  * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//click event for gems
//var for total points
//add gem points to total points

//    * Your game will hide this amount until the player clicks a crystal.
//This line above is important!!!

//  * The player wins if their total score matches the random number from the beginning of the game.
//  * The player loses if their score goes above the random number.
//the if statement below should be in its own function and return true or false 
//if total score is the same or equals to the winning number ... 
//return true
//else total score is more than winning number
//return false

//  * The game restarts whenever the player wins or loses.
//create function to restart the game
//when game is restarted (this inside of restart function) ... 
//get new random winning number
//get new random numbers for each gem
//reset user total score

// * The app should show the number of games the player wins and loses.
//store wins and loses in variables

// ##### Option 1 Game design notes

//* The random number shown at the start of the game should be between 19 - 120.

//* Each crystal should have a random hidden value between 1 - 12.

// To that end, do not refresh the page as a means to restart the game.

$(document).ready(function () {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
