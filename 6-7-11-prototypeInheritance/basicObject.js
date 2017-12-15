var pizza = {
	crust: 'thin',
	toppings: 3,
	hasBacon: true,
	howmanyToppings: function(){
		return this.toppings;
	}
}

// adding properties to object
pizza.price = '$12';

// romove a property in an object
delete(pizza.crust)

// returns 'thin'
console.log(pizza.crust)

