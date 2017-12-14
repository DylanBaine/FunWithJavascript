let cleanRoom = function(){
	return new promise(function(resolve, reject){
		resolve('cleaned room');
	});
}

let removeGarbage = function(p){
	return new promise(function(resolve, reject){
		resolve('removed garbage');
	});
}

let winIcecream = function(p){
	return new promise(function(resolve, reject){
		resolve('won icecream');
	});
}