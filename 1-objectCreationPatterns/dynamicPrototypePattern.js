var peopleDynamicProto = function(name, age, state){

	this.name = name;
	this.age = age;
	this.state = state;

	if(typeof this.person !== "function"){
		peopleDynamicProto.prototype.printPerson = function(){
			console.log("name " + this.name + ", age " + this.age + ", state " + this.state);
		}		
	}



}



var person1 = new peopleDynamicProto("Dylan", 24, "Oklahoma");

person1.printPerson()
