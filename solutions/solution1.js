/*
- Write a JavaScript program to display the current day and time in the following format.
- Sample Output : 
- - Today is : Friday. 
- - Current time is : 4 PM : 50 : 22
*/

let prettyDate = function(){
	var date = new Date();

	date.hours = date.getHours();
	var string = 'AM';
	date.minutes = date.getMinutes();
	date.seconds = date.getSeconds();
	var day;

	if( date.hours > 12){
		date.hours = date.hours - 12;
		string = 'PM'
	}

	switch (date.getDay()){
		case 0:
			day = "Sunday"
			break;
		case 1:
			day = "Monday"
			break;
		case 2:
			day = "Tuesday"
			break;
		case 3:
			day = "Wednesday"
			break;
		case 4:
			day = "Thursday"
			break;
		case 5:
			day = "Friday"
			break;
		case 6:
			day = "Saturday"
			break;
	}


	return 'Today is : ' + day + '\nCurrent time is : ' + date.hours + ' ' + string + ' : ' + date.minutes + ' : ' + date.seconds;
}

console.log(prettyDate());