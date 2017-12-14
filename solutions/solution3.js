/*
-  Write a JavaScript program to get the current date.
- Expected Output : 
- - mm-dd-yyyy, mm/dd/yyyy
*/

let coolDates = function(){
	var date = new Date();

	var month, day, year;

	if(date.getMonth() + 1 < 10){
		month = '0' + date.getMonth() + 1;
	}else{
		month = date.getMonth() + 1;
	}

	if(date.getDate() < 10){
		day = '0' + date.getDate();
	}else{
		day = date.getDate();
	}

	year = date.getFullYear();

	var sol1 = month + '-' + day + '-' + year;
	var sol2 = month + '/' + day + '/' + year;

	return sol1 + '\n' + sol2;
}

console.log(coolDates())