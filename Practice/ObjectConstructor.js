function person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Indian"
}
const myFather = new person("Sachchidanand","Singh",48,"black");
const myMother = new person("Tara", "Singh", 43, "black");
// console.log(myMother);
myFather.nationality ="Bhartiya";

console.log(myFather);

