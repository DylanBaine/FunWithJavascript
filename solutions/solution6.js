/*
- Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

let isLeapyear = function(year){
	return year % 4 === 0 ? true : false;
}

console.log(isLeapyear(2021));