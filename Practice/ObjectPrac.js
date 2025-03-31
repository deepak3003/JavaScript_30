
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
// console.log(animal.color);
// console.log(animal["color"]);

//JavaScript Object Methods
// console.log(person.fullName());

//JavaScript Objects are Mutable
const x = person;
x.age = 10;
// console.log(person);

// Deleting Properties
// The delete keyword deletes a property from an object

delete person.age;
// console.log(person);

// Nested Objects
myObj = {
    name:"Jhon",
    age:30,
    myCars:{
        car1:"BMW",
        car2: "Ford"
    }
}
// console.log(myObj.myCars.car2);
let text ="";
for(let x in animal){
    text += animal[x] +" ";
}
// document.getElementById("demo").innerHTML = text;

// Using Object.entries()

const fruits = {Bananas:300, Apple:500, Orange:200};
let text1 ="";
for(let[fruit, value] of Object.entries(fruits)){
    text1 += fruit + ": "+value+"<br>";
}
// document.getElementById("demo").innerHTML = text1;



