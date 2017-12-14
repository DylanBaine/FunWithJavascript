/*
- Write a JavaScript program where the program takes a random integer between 1 to 10.
- The user is then prompted to input a guess number. 
- If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
*/

let iGuess = function(guess){
	let randomNumber = Math.round(Math.random(2,10) * 10);

	var result = guess == randomNumber ? "Good Work! You guessed the right number" : "Not Matched... The number was " + randomNumber + ".";

	return result;
}

console.log(iGuess(3));