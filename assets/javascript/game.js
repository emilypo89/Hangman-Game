// start program

// show random word on screen

function hangman(){
	// document.getElementByClass(".lifeImages").style.visibility = "hidden"

	var words = ["horse", "radio", "mouse", "money"];
	var generatedWord = words[Math.floor(Math.random() * words.length)];
	var incorrectGuess = 0;
	var lives = 6;
	var wins = 0;
	var losses = 0;
	var displayWord = "";
	var correctLetters = [];

	var updateWins = '<p>Wins: ' + wins +'</p>';
	var updateLosses = '<p>Losses: ' + losses +'</p>';
	var updateincorrectGuess = '<p>Number of Incorrect Guesses: ' + incorrectGuess +'</p>';
	var updateLives = '<p>Number of Lives Left: ' + lives + '</p>';

	var gameStats = document.getElementById("hangmanStats");
	gameStats.innerHTML = updateWins + updateLosses + updateincorrectGuess + updateLives;

	

// Input letters
document.onkeyup = function(event) {
	var userGuess = event.key;

	if (generatedWord === words[0]){
	 	var lettersHorse = ["h", "o", "r", "s", "e"];
	 	for(i = 0; i < lettersHorse.length; i++) {
		 	var currentLetter = (lettersHorse[i]);
		 	console.log(lettersHorse[i]);

			if (lettersHorse.indexOf(userGuess) !== -1){
			 	correctLetters.push(userGuess);
			}

			if (correctLetters.indexOf(currentLetter) !== -1){
			 	displayWord = displayWord +currentLetter;
			}
			else {
			 	displayWord = displayWord +"_ ";
			}

	 	}

	 	if (displayWord === lettersHorse){
	 		wins ++;
	 		reset();
	 	}

	 	if (lives === 0);{
	 		losses ++;
	 		reset();
 		}
	 }
  	console.log('Display Word:' + displayWord)

	if (generatedWord === words[1]){
	 	var lettersRadio = ["r", "a", "d", "i", "o"];
	 	for(i = 0; i < lettersRadio.length; i++) {
		 	var currentLetter = (lettersRadio[i]);
		 	console.log(lettersRadio[i]);

			if (lettersRadio.indexOf(userGuess) !== -1){
		 		correctLetters.push(userGuess);
		 	}

			if (correctLetters.indexOf(currentLetter) !== -1){
		 		displayWord = displayWord +currentLetter;
			}
			else {
		 		displayWord = displayWord +"_ ";
			}
	 	}

	 	if (displayWord === lettersRadio){
	 		wins ++;
	 		reset();
	 	}

	 	if (lives === 0);{
	 		losses ++;
	 		reset();
 		}
	}

  	console.log('Display Word:' + displayWord)


	if (generatedWord === words[2]){
	 	var lettersMouse = ["m", "o", "u", "s", "e"];
	 	for(i = 0; i < lettersMouse.length; i++) {
		 	var currentLetter = (lettersMouse[i]);
		 	console.log(lettersMouse[i]);

			if (lettersMouse.indexOf(userGuess) !== -1){
		 	correctLetters.push(userGuess);
			}

			if (correctLetters.indexOf(currentLetter) !== -1){
		 	displayWord = displayWord +currentLetter;
			}
			else {
		 	displayWord = displayWord +"_ ";
			}
	 	}

	 	if (displayWord === lettersMouse){
	 		wins ++;
	 		reset();
	 	}

	 	if (lives === 0);{
	 		losses ++;
	 		reset();
 		}
 	}

  	console.log('Display Word:' + displayWord)

	if (generatedWord === words[3]){
	 	var lettersMoney = ["m", "o", "n", "e", "y"];
	 	for(i = 0; i < lettersMoney.length; i++) {
		 	var currentLetter = (lettersMoney[i]);
		 	console.log(lettersRadio[i]);

			if (lettersMoney.indexOf(userGuess) !== -1){
			 	correctLetters.push(userGuess);
			}

			if (correctLetters.indexOf(currentLetter) !== -1){
			 	displayWord = displayWord +currentLetter;
			}
			else {
			 	displayWord = displayWord +"_ ";
			}
	 	}

	 	if (displayWord === lettersMoney){
	 		wins ++;
	 		reset();
	 	}

	 	if (lives === 0);{
	 		losses ++;
	 		reset();
 		}
 	}

  	console.log('Display Word:' + displayWord)


}
}

function reset(){
  		displayWord = "";
  		correctLetters =[];
  		var incorrectGuess = 0;
		var lives = 6;
  	}
	// if (generatedWord === words[0]){
	//  	var lettersHorse = ["h", "o", "r", "s", "e"];
	//  	for(i = 0; i < lettersHorse.length; i++) {
	// 	 		console.log(lettersHorse[i]);
	//  	}
	// 	if (userGuess === lettersHorse[0]){
	// 		var horseLetter0 = document.getElementById("div0");
	// 		horseLetter0.innerHTML = "h";
	// 	}
	// 	else if (userGuess === lettersHorse[1]){
	// 		var horseLetter1 = document.getElementById("div1");
	// 		horseLetter1.innerHTML = "o";
	// 	}

	// 	else if (userGuess === lettersHorse[2]){
	// 		var horseLetter2 = document.getElementById("div2");
	// 		horseLetter2.innerHTML = "r";
	// 	}

	// 	else if (userGuess === lettersHorse[3]){
	// 		var horseLetter3 = document.getElementById("div3");
	// 		horseLetter3.innerHTML = "s";
	// 	}
	// 	else if (userGuess === lettersHorse[4]){
	// 		var horseLetter4 = document.getElementById("div4");
	// 		horseLetter4.innerHTML = "e";
	// 	}

	//  	else {
	//  		incorrectGuess++;
	//  		lives--;
	//  	}
	// }
	
	 

	// if (generatedWord === words[1]){
	//  	var lettersRadio= ["r", "a", "d", "i", "o"];
	//  	for(i = 0; i < lettersRadio.length; i++) {
	// 	 		console.log(lettersRadio[i]);
	// 	}	
	// 	if (userGuess === lettersRadio[0]){
	// 		var radioLetter0 = document.getElementById("div0");
	// 		radioLetter0.innerHTML = "r";
	// 	}
	// 	else if (userGuess === lettersRadio[1]){
	// 		var radioLetter1 = document.getElementById("div1");
	// 		radioLetter1.innerHTML = "a";
	// 	}

	// 	else if (userGuess === lettersRadio[2]){
	// 		var radioLetter2 = document.getElementById("div2");
	// 		radioLetter2.innerHTML = "d";
	// 	}

	// 	else if (userGuess === lettersRadio[3]){
	// 		var radioLetter3 = document.getElementById("div3");
	// 		radioLetter3.innerHTML = "i";
	// 	}
	// 	else if (userGuess === lettersRadio[4]){
	// 		var radioLetter4 = document.getElementById("div4");
	// 		radioLetter4.innerHTML = "o";
	// 	}

	//  	else {
	//  		incorrectGuess++;
	//  		lives--;
	//  	}
	//  }

	// if (generatedWord === words[2]){
	//  	var lettersMouse = ["m", "o", "u", "s", "e"];
	//  	for(i = 0; i < lettersMouse.length; i++) {
	// 	 		console.log(lettersMouse[i]);
	// 	}

	// 	if (userGuess === lettersMouse[0]){
	// 		var mouseLetter0 = document.getElementById("div0");
	// 		mouseLetter0.innerHTML = "m";
	// 	}
	// 	else if (userGuess === lettersMouse[1]){
	// 		var mouseLetter1 = document.getElementById("div1");
	// 		mouseLetter1.innerHTML = "0";
	// 	}

	// 	else if (userGuess === lettersMouse[2]){
	// 		var mouseLetter2 = document.getElementById("div2");
	// 		mouseLetter2.innerHTML = "u";
	// 	}

	// 	else if (userGuess === lettersMouse[3]){
	// 		var mouseLetter3 = document.getElementById("div3");
	// 		mouseLetter3.innerHTML = "s";
	// 	}
	// 	else if (userGuess === lettersMouse[4]){
	// 		var mouseLetter4 = document.getElementById("div4");
	// 		mouseLetter4.innerHTML = "e";
	// 	}

	//  	else {
	//  		incorrectGuess++;
	//  		lives--;
	//  	}	 
	//  }

	// if (generatedWord === words[3]){
	//  	var lettersMoney = ["m", "o", "n", "e", "y"];
	//  	for(i = 0; i < lettersMoney.length; i++) {
	// 	 		console.log(lettersMoney[i]);
	// 	}
	// 	if (userGuess === lettersMoney[0]){
	// 		var moneyLetter0 = document.getElementById("div0");
	// 		moneyLetter0.innerHTML = "m";
	// 	}
	// 	else if (userGuess === lettersMoney[1]){
	// 		var moneyLetter1 = document.getElementById("div1");
	// 		moneyLetter1.innerHTML = "o";
	// 	}

	// 	else if (userGuess === lettersMoney[2]){
	// 		var moneyLetter2 = document.getElementById("div2");
	// 		moneyLetter2.innerHTML = "n";
	// 	}

	// 	else if (userGuess === lettersMoney[3]){
	// 		var moneyLetter3 = document.getElementById("div3");
	// 		moneyLetter3.innerHTML = "e";
	// 	}
	// 	else if (userGuess === lettersMoney[4]){
	// 		var moneyLetter4 = document.getElementById("div4");
	// 		moneyLetter4.innerHTML = "y";
	// 	}

	//  	else {
	//  		incorrectGuess++;
	//  		lives--;
	//  	}

	//  }
// }


// }


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
