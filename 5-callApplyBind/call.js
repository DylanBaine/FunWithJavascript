var obj = {num:5}

var addToThis = function(a,b,c){

	return this.num + a + b + c;
};

// binding obj with addToThis and use the addToThis argument in the second argument of .call()
// first arg of .call() has to be the object, the following arguments are the arguments fo the addToThis functions
// ex: functionName.call(obj, function, args)

let answer = addToThis.call(obj, 3, 6, 1);
console.log(answer);