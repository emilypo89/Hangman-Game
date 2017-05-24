// Click Button to Start


// start program

// show random word on screen

function hangman(){
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
		function keyEnter(){
			var	userGuess = document.getElementById("letterEnter").value;

			for(i = 0; i < letters.length; i++) {
		 		console.log(letters[i]);

			if (userGuess === letters[i]{
				alert("you got one right");
			}

		 	else {
		 		
		 	}
		 	}

		 	// if (userGuess === letters[i]){

		 	// }


			}
}

	
      



// letter correct/incorrect


// Lives lost
	var correctLetters = 0;
    var incorrectLetters = 0;
    var lives = 15;

