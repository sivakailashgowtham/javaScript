/*
parameters

return keyword



*/


function iphone(){
    console.log("welcome to iphone world")
}
iphone();

var a=10;
var b=20;

function add(){
    var add=a+b
    console.log(add)
}

add();

var actor="kamal"
var player="dhoni"
var movie="Anbe sivam"

function actorname(){
    console.log("Favourite actor:" + actor)
}

actorname()


function area(l,b){
    var areaSize=l*b
    console.log("area size is " + areaSize)
}
area(8,4)

function myname(){

    return "kailash"
}

var a=myname();
console.log(a)


function sizeOfArea(a,b){
   return a+b
}

var size=sizeOfArea(10,20)
console.log("size is" +size)