var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
}

var red = document.getElementById("red");
//red.setAttribute("value", "5");
console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var yellow = document.getElementById("yellow");
//console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

// add an event listener to elements
red.addEventListener('click', function () {
    //this refers to red
    addToScore(this.value);
    checkPlayerScore();
});

//parseInt(42.01) => 42
//alert(parseInt('james')); // NaN (not a number)
// Cafe Del Mar ChillWave 2 :)
// .innerHTML returns a string, NaN

blue.addEventListener('click', function () {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});

yellow.addEventListener('click', function () {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});

green.addEventListener('click', function () {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue(a, b) {
    return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
    //yourScore, targetScore (parseFloat() is for decimals)
    var playerInt = parseInt(yourScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You win!');
    } else if (playerInt > targetInt) {
        alert('You lose!');
    }
}

console.log(getRandomValue(10, 4));

//make array of objects

var crystalsGuess = [
    { crystal1: 4, crystal2: 6, crystal3: 7, crystal4: 9, guessNumber: 25 },
    { crystal1: 1, crystal2: 4, crystal3: 6, crystal4: 6, guessNumber: 25 }

];
console.log(crystalsGuess[0].crystal1);



Math.floor((Math.random() * 19) + 120) var min = 19; var max = 120 var randomNumber = randomNumberFromRange(minNumber, maxNumber);
function randomNumberFromRange(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); } console.log(randomNumber);