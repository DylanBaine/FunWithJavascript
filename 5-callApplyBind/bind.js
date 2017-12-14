var obj = {num:5};

var addToThis = function(a,b,c){
	return this.num + a + b + c;
};

var bound = addToThis.bind(obj);

console.log(bound(1,2,3))