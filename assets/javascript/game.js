//Declare all variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winningLetter = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//Find random letter
function randomLetter() {
  var randNum = Math.floor(Math.random() * alphabet.length);
  winningLetter = alphabet[randNum];
}

//Update wins
function updateHtml(id, data) {
  document.getElementById(id).innerHTML = data;
}

//Initiate first random letter
randomLetter();

// Listen for pressed key
document.addEventListener('keydown', function(event){
  var letter = event.key;

  //Check if key pressed was a valid letter
  if (alphabet.indexOf(letter) > -1) {
    //Check for a win
    if (letter === winningLetter) {
      wins++;
      guessesLeft = 9;
      guessesSoFar = [];
      updateHtml("wins", wins);
      updateHtml("guessesLeft", guessesLeft);
      updateHtml("guessesSoFar", guessesSoFar);
      randomLetter();
    }
    //Check for a missed letter
    else if (letter !== winningLetter && guessesLeft != 1) {
      guessesLeft--;
      guessesSoFar.push(letter);
      updateHtml("guessesLeft", guessesLeft);
      updateHtml("guessesSoFar", guessesSoFar.join(" "));
    }
    //Check for a loss
    else if (guessesLeft <= 1) {
      losses++;
      guessesLeft = 9;
      guessesSoFar = [];
      updateHtml("losses", losses);
      updateHtml("guessesLeft", guessesLeft);
      updateHtml("guessesSoFar", guessesSoFar);
      randomLetter();
    }
  }
});
