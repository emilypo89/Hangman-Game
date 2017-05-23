// Click Button to Start


// Random Word is hidden from view
	var words = ["peanut", "lettace", "mouse"]

	var generatedWord = words[Math.floor(Math.random() * options.length)];
		// for (var i = 0; i < words.length; i++) {
		//  console.log(words[i]);
	// }

	getElementbyId("gameboard").innerHTML = generatedWord;


      

// Input letters
	document.onkeyup = function(event) {
		var userGuess = event.key;
	}

// letter correct/incorrect


// Lives lost
	var correctLetters = 0;
    var incorrectLetters = 0;
    var lives = 15;

