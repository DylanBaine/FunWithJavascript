var pizza = function(){

	// private (only available inside of declaration)
	var crust = 'thin';
	var toppings = 3;
	var getToppings = function(){
		return toppings;
	}

/*
	// returned from closure
	var temp = {};
	temp.getToppings = getToppings;
	return temp;
*/
	// public (available to be called on declaration)
	this.hasBacon = true;
	this.getCrust = function(){
	return crust;
	}

};

var pizzaA = new pizza();

// don't see crust
// do see hasBacon
console.log(pizzaA);

// does return thin
console.log(pizzaA.getCrust());