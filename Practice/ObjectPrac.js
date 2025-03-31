
const person = { firstName: "Deepak", lastName: "Singh", age: 22, eyeColor: "black", fullName : function(){
    return this.firstName + " " + this.lastName;
} }
// console.log(person);

const animal = new Object();
animal.name = "Dog";
animal.color = "Brown";
animal.weight = 15
animal.height = 2.5 + 'feet';
// console.log(animal);

//Accessing Object Properties
console.log(animal.color);
console.log(animal["color"]);

//JavaScript Object Methods
console.log(person.fullName());

//JavaScript Objects are Mutable



