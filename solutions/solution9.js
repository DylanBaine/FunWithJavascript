/*
- Write a JavaScript program to calculate days left until next Christmas.
*/

let logDaysTillChristmas = function(){
	var dayMill = 1000 * 60 * 60 * 24;

	var today = new Date();

	var month = today.getMonth();

	var christmas = new Date(today.getFullYear(),11,25);

	var daysTillChristmas = Math.ceil((christmas.getTime() - today.getTime())/(dayMill));

	console.log(daysTillChristmas + " days until christmas");
}

logDaysTillChristmas();