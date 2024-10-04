/*

object contains
 properties and value

*/

var person={
    firstname:"siva",
    lastname:"ramar",
    age:31,
    weight:88

}

console.log(person.age)

//add new propertie to exsisting object

person.height=6

console.log(person)

//update exsisting properties

person.age=22;
console.log(person)

//to remove properties

delete person.lastname

console.log(person)

//for in loop

for(let x in person){
    console.log(person[x])
    console.log(x + " " + person[x])
}