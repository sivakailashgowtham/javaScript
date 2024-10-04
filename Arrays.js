/*
array is a special variable able to hold more than one values

*/

var cars=["BMW","volvo","benz"]

console.log(cars[1])

cars[0]="POLO"

console.log(cars)

var myArray=["Polo",2014,true]
console.log(myArray)

var person1={
    name:"kailash",
    Age:31}

var person2={
    name:"siva",
    Age:29
}    

var myarray1=[person1,person2]
console.log("my array is " + myarray1)

var fruits=["banana","apple","orange","pomo"]
console.log(fruits.length)
//looping elements from array
for(var i=0;i<fruits.length;i++){
       console.log(fruits[i])
}
//looping elements from array using for/of loop
for(f of fruits){
    console.log(f)
}

//Recognize an array

console.log(typeof fruits)

//array itself is an object in javascript

console.log(Array.isArray(fruits))