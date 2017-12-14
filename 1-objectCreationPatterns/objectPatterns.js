var peopleFactory = function(name, age, state){

	var temp = {};

	temp.age 	= age;
	temp.name 	= name;
	temp.state 	= state;

	temp.printPerson = function(){
		console.log("name " + this.name + ", age " + this.age + ", state " + this.state);
	}

	return temp;

};

var firstPerson = new peopleFactory("dylan", 12, "Oklahoma");

var secondPerson = new peopleFactory("jane", 21, "Kansas");

firstPerson.printPerson();