var peopleConstructor = function(name, age, state){

	this.name 	= name;
	this.age 	= age;
	this.state 	= state;

	this.printPerson = function(){
		console.log("name " + this.name + ", age " + this.age + ", state " + this.state);
	}

}

var person1 = new peopleConstructor('Dylan', 24, 'Oklahoma')

person1.printPerson();