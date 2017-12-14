var peopleProto = function(){

}

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name given";
peopleProto.prototype.state = "no state given";
peopleProto.prototype.printPerson = function(){
	console.log("name " + this.name + ", age " + this.age + ", state " + this.state);
}

var person1 = new peopleProto();
person1.name = "Dylan";
person1.age = 24;
person1.state = "Oklahoma";

person1.printPerson()

console.log(person1.name)