let calc = function(num1, num2, callback){
	if(typeof callback === "function"){
		return callback(num1, num2);
	}
}

console.log(calc(10,5, function(a,b){
	return a-b
	})
)