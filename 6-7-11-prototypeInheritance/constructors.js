var x = function(j){
	this.i = 0;
	this.j = j;

	this.getJ = function(){
		return this.j;
	}
}

var x1 = new x(1);
var x2 = new x(2);

console.log(x1.getJ());

var pizza = function(){
	this.crust = 'thin';
	this.toppings = 3;
	this.hasBacon = true;

	this.howmanyToppings = function(){
		return this.toppings;
	}
}

// returns undefined
// console.log(pizza.crust)

var pizzaA = new pizza();
var pizzaB = new pizza();

pizzaA.crust = 'pan';

// returns 'pan'
console.log(pizzaA.crust);

// true
console.log(pizzaB instanceof pizza)