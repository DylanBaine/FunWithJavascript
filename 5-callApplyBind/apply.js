var arr = [3, 6, 1];

var obj = {num:5}

var addToThis = function(a,b,c){

	return this.num + a + b + c;
};

// With apply() we can pass an object just like call()
// The secod argument can be an array containing the arguments you would pass in apply()
let answer = addToThis.apply(obj, arr);

console.log(answer)