/*
- Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
*/

var prob = 'w3resource'

function doItTo(x, debugging){
	var result;
	var string = x;
	var rev = string.split('').reverse();
	for (var i = 1; i < string.length; i++){
		rev[i] = string[i - 1]
	}

	result = rev.join('')
	if(debugging){
		console.log(result)
	}

	prob = result;
}

console.log(prob)
for(var ii = 0; ii < prob.length - 1; ii++){
	doItTo(prob, false)
	console.log(prob)
}

	