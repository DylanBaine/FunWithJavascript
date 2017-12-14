var addTo = function(passed){

	var add = function(inner){

		return passed + inner;

	}

	return add;
}

var addThree = new addTo(3);

var addFour = new addTo(4);

console.log(addThree(6))



var prefix = function(prefix){
	var affix = function(affix){
		return prefix + affix;
	}
	return affix;
}

var first = new prefix('Un');
console.log(first('do'));