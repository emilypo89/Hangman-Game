
// global variables 
var incorrectGuess = 0;
var lives = 6;
var wins = 0;
var losses = 0;

const generateWord = () => {
	const words = ["horse", "radio", "mouse", "money"];
	const currentWord = words[Math.floor(Math.random() * words.length)]
	return currentWord;
}
console.log(generateWord());

// need to push "push to play" button for game to work
const hangman = () => {
	const currentWord = generateWord();
	let userGuess;
	document.onkeyup = function(event) {
		console.log(event.key);
		if (event.key.match(/[^\w\s]+/g)){
			userGuess = event.key;
		}
		
	}
	checkUserInput(currentWord, userGuess);

	if (letterCounter === 5){
		wins++;
		reset();
	}

	if (lives = 0){
		losses++;
		reset();
	}
}

const checkUserInput = (word, userGuess) => {
	const indexOfGuess = word.indexOf(userGuess);
	console.log(indexOfGuess);
	if (indexOfGuess != null) {
		var wordDisplay = document.getElementById(`div${indexOfGuess}`);
		horseLetter0.innerHTML = userGuess;
		letterCounter++;
	}
	else{
		incorrectGuess--;
	}
}

// Game Score Stats
var updateWins = '<p>Wins: ' + wins +'</p>';
var updateLosses = '<p>Losses: ' + losses +'</p>';
var updateincorrectGuess = '<p>Number of Incorrect Guesses: ' + incorrectGuess +'</p>';
var updateLives = '<p>Number of Lives Left: ' + lives + '</p>';

var gameStats = document.getElementById("hangmanStats");
gameStats.innerHTML = updateWins + updateLosses + updateincorrectGuess + updateLives;

var letterCounter = 0;

// reset function
const reset = () => {
	displayWord = "";
	correctLetters =[];
	var incorrectGuess = 0;
	var lives = 6;
}




// CODE FOR EVENTUAL HANGMAN BOARD PIECES
 //    if (lives === 5) {
 //    	document.getElementById("hangmanHead").style.visibility = "visible";
 //    }

 //    if (lives === 4) {
 //    	document.getElementById("hangmanBody").style.visibility = "visible";
 //    }

 //    if (lives === 3) {
 //    	document.getElementById("hangmanArm1").style.visibility = "visible";
 //    }

 //    if (lives === 2) {
 //    	document.getElementById("hangmanArm2").style.visibility = "visible";
 //    }

 //    if (lives === 1) {
 //    	document.getElementById("hangmanLeg1").style.visibility = "visible";
 //    }

 //     if (lives === 0) {
 //    	document.getElementById("hangmanLeg2").style.visibility = "visible";

 //    	// show YOU LOSE!
 //    }
