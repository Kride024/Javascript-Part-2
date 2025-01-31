//*---------------------------------------
//* ECMAScript Feature (2022)/ES13
//*---------------------------------------
//? List of features:
// .at() function for indexing
// Object.hasOwn(obj,propKey)
//*---------------------------------------
//* .at()
//*---------------------------------------
//? Before ES2022, square bracket notation was used to fetch a particular element in an array. This method is straightforward unless you need to perform a backward iteration, i.e., negative indexing.In the case of negative indexing, the common practice was to use arr[arr.length-N],where array length is referred to and indexing from the end.

//? The .at() method introduced in ES2022 has simplified this process.In a case of positive indexing, .at() will work the same as the square brackets. But for negative indexing, .at() start iterating from the end.

const array=[1,2,3,4,5,6,7];
console.log(array.at(-1));

//todo Note Datatypes supporting this function.👇
//String
//Array
//All Typed Array classes: Uint8Array etc.

//*---------------------------------------
//* Object.hasOwn(obj,propKey)
//*---------------------------------------
//? Object.hasOwn() is a static method that you can use to check if a property exists in an object or not. It returns true if the specified object contains the indicated property as its own, and if the property is inherited or doesn't exist, it return false.This method takes the object as the first argument and the property you want to check as the second.
//? Object.hasOwn is the intended alternative for the Object.prototype.hasOwnProperty method. Although Object.prototype,hasOwnProperty has been in JavaScript specification for quite a time, it has some drawbacks.

const book={
    name:"World best Life",
    author:"Thapa Technical",
};
console.log(book.hasOwnProperty("name"));//true
console.log(book.hasOwnProperty("price"));//false

//using Object.hasOwn() method
console.log(Object.hasOwn(book,"name"));//true

//! Issue with hasOwnProperty
//? Issue 01: Doesn't work for objects created using object.create(null)

const student=Object.create(null);
student.name="vinod";
// console.log(student.hasOwnProperty(name));//Gave Error
console.log(Object.hasOwn(student,"name"));//true




