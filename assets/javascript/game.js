// Click Button to Start


// start program

// show random word on screen

function hangman(){
	document.getElementByClass(".lifeImages").style.visibility = "hidden"

	var words = ["horse", "radio", "mouse", "money"];

	var generatedWord = words[Math.floor(Math.random() * words.length)];

		 document.getElementById("wordHere").innerHTML=generatedWord;



	if (generatedWord === words[0]){
	 	var letters = ["h", "o", "r", "s", "e"];

	 }

	if (generatedWord === words[1]){
	 	var letters = ["r", "a", "d", "i", "o"];
	 }

	if (generatedWord === words[2]){
	 	var letters = ["m", "o", "u", "s", "e"];
	 }

	if (generatedWord === words[3]){
	 	var letters = ["m", "o", "n", "e", "y"];
	 }

// Input letters
	// function keyEnter() {
 //    document.getElementById("letterEnter").value = userGuess;

	object.onclick = function(){keyEnter};
			var	keyEnter = userGuess;
			var	userGuess = document.getElementById("letterEnter").value;

			for(i = 0; i < letters.length; i++) {
		 		console.log(letters[i]);
		 	}

			if (userGuess === letters[i]{
				alert("you're right");
			}

		 	else {
		 		alert("you're wrong");
		 	}



			}
}

// Guess Counter
	var correctLetters = 0;
    var incorrectLetters = 0;
    var lives = 6;


    if (lives === 5) {
    	document.getElementById("hangmanHead").style.visibility = "visible";
    }

    if (lives === 4) {
    	document.getElementById("hangmanBody").style.visibility = "visible";
    }

    if (lives === 3) {
    	document.getElementById("hangmanArm1").style.visibility = "visible";
    }

    if (lives === 2) {
    	document.getElementById("hangmanArm2").style.visibility = "visible";
    }

    if (lives === 1) {
    	document.getElementById("hangmanLeg1").style.visibility = "visible";
    }

     if (lives === 0) {
    	document.getElementById("hangmanLeg2").style.visibility = "visible";

    	// show YOU LOSE!
    }






