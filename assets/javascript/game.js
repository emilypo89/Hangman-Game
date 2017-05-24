// Click Button to Start


// start program

// show random word on screen

// document.onclick = function(event) {
//     var userInput = event.key;

var correctLetters = 0;
var incorrectLetters = 0;
var lives = 6;
var words = ["horse", "radio", "mouse", "money"];
var letters = {
	w1: ["h", "o", "r", "s", "e"],
	w2: ["r", "a", "d", "i", "o"],
	w3: ["m", "o", "u", "s", "e"],
	w4: ["m", "o", "n", "e", "y"]
}
var lettersArray = [letters.w1, letters.w2, letters.w3, letters.w4];
var generatedWord = [];

//This will be used to store the number of dashes in the word AND
//replace those dashes with the correct guesses.
var correctGuess = [];

//correctGuess = ["_", "_", "_", "_", "_"]

var displayWord = "";

// diplaying the word
function hangman(){
	generatedWord = lettersArray[Math.floor(Math.random() * lettersArray.length)];

	//Pushing the right number of dashes into the correct guess array
	for(var i =0 ; i< generatedWord.length; i++){
		correctGuess.push("_");
	}

	generateDisplayWord(correctGuess);

	console.log(generatedWord);
}


// Input letters
	document.onkeyup = function(event) {
        var key = event.key;
        wordCheck(key);
	}

	 function wordCheck(key){
	 	for(var i = 0; i < generatedWord.length; i++){
	 		if (key === generated word[i]) {
	 			replace correctGuess[i] = key
	 		}
	 		//if the key == generatedWord[i]
	 		//then we're going to replace correctGuess[i] = key;
	 	}

	 	//After we replace the dashes in the correct guess array with the key
	 	//We will generate a new display word
	 	generateDisplayWord(correctGuess);
	 }

	 function generateDisplayWord(wordArray){
	 	displayWord = "";

	 	for(var i =0 ; i< wordArray.length; i++){
			displayWord = displayWord + "_ ";
		}

		document.getElementById("wordHere").innerHTML = displayWord;
	 }

// word arrays
	// if (generatedWord === words[0]){
	//  	var letters = ["h", "o", "r", "s", "e"];
	//  	for(i = 0; i < letters.length; i++) {
	// 	 		console.log(letters[i]);
	// 	 	}
	//  }

	// if (generatedWord === words[1]){
	//  	var letters = ["r", "a", "d", "i", "o"];
	//  	for(i = 0; i < letters.length; i++) {
	// 	 		console.log(letters[i]);
	// 	 	}
	//  }

	// if (generatedWord === words[2]){
	//  	var letters = ["m", "o", "u", "s", "e"];
	//  	for(i = 0; i < letters.length; i++) {
	// 	 		console.log(letters[i]);
	// 	 	}
	//  }

	// if (generatedWord === words[3]){
	//  	var letters = ["m", "o", "n", "e", "y"];
	//  	for(i = 0; i < letters.length; i++) {
	// 	 		console.log(letters[i]);
	// 	 	}
	//  }

// displaying images
	// if 		
	// document.getElementByClass(".lifeImages").style.visibility = "hidden"

// Guess Counter


    // if (lives === 5) {
    // 	document.getElementById("hangmanHead").style.visibility = "visible";
    // }

    // if (lives === 4) {
    // 	document.getElementById("hangmanBody").style.visibility = "visible";
    // }

    // if (lives === 3) {
    // 	document.getElementById("hangmanArm1").style.visibility = "visible";
    // }

    // if (lives === 2) {
    // 	document.getElementById("hangmanArm2").style.visibility = "visible";
    // }

    // if (lives === 1) {
    // 	document.getElementById("hangmanLeg1").style.visibility = "visible";
    // }

    //  if (lives === 0) {
    // 	document.getElementById("hangmanLeg2").style.visibility = "visible";

    	// show YOU LOSE!
    //}






