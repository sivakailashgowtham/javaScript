/*

*/

var fruits=["banana","apple","carrot","beetroot"]

//toString

console.log(fruits.toString())
console.log(fruits.join("*"))

//pop() will remove the last element
fruits1=["banana","apple","carrot","beetroot"]

console.log(fruits1.pop())
console.log(fruits1)

//push method will add new element


console.log(fruits1.push("orange"))
//push method will add element in last and return length of an array

//shift () remove first element 

fruits2=["banana","apple","carrot","beetroot"]

console.log(fruits2.shift());

console.log(fruits2)


//unshift() add element in the starting position of an array and returns length
fruits2.unshift("lemon")
console.log(fruits2)

//deleting elements from an array no movement in the index
delete fruits2[2]
console.log(fruits2)

//concat() - joining or merging 2 or more arrays

var arr1=[10,22]
var arr2=["America"]
console.log(arr1.concat(arr2))

