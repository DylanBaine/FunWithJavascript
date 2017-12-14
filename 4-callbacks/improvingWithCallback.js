// original
/*let calc = function(num1, num2, calcType){
	if(calcType == "add"){
		return num1 + num2;
	}else if(calcType == "multiply"){
		return num1 * num2;
	}
}

console.log(calc(2,5,"multiply"));
*/

// improved
let add = function(a,b){
	return a + b;
}

let multiply = function(a,b){
	return a * b;
}

let doWhatever = function(a,b){
	return('Here are your numbers back: ' + a + ' and ' + b);
}

let calc = function(num1, num2, callback){
	return callback(num1, num2);
}

console.log(calc(4, 2, doWhatever));