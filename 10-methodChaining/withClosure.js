var obj = function(){
	var i = 0;
	var add = function(j){
		i += j;
		return this;
	};
	var sub = function(j){
		i -+ j;
		return this;
	};
	var print = function(){
		console.log(i);
	}

	return {add:add, sub: sub, print: print};
};

// dont need 'new'
var x = obj();

x.add(3).sub(2).print();