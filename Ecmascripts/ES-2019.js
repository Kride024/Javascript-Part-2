//*------------------------------------
//* ECMAScript Features (2019) / ES10
//*------------------------------------

//? List of new useful features added in ES8 👇
// Array.prototype.{flat,flatMap}
//object.fromEntries()
//String.prototype.{trimStart,trimEnd}
//Symbol.prototype.description
//Optional catch binding

//*------------------------------------
//* Array.flat & Array.flatMap
//*------------------------------------
//? flat() is a new array instance method that can creates a one-dimensional array from a multidimensional array.(nested arrays into a single,flat array.)

const nestedArray=[1,2,[3,4],5];
const nestedArray1=[1,[2,[3,4]],5];
console.log(nestedArray.flat());
console.log(nestedArray1.flat(2));

//? flatMap() is a new Array instance method that combines flat() with map().It's useful when calling a function that returns an array in the map() callback, but you want your resulted array to be flat:

const arr=["My name","is vinod","thapa"];
// const newArr=arr.flatMap((curVal)=>curVal.split(""));//[ 'My', 'name', 'is', 'vinod', 'thapa' ]
// const newArr=arr.flatMap((curVal)=>curVal.split(""));//['M', 'y', ' ', 'n', 'a', 'm', 'e', 'i', 's', ' ','v', 'i', 'n', 'o', 'd','t', 'h', 'a', 'p', 'a']
// const newArr=arr.flatMap((curVal)=>curVal);//[ 'My name', 'is vinod', 'thapa' ]
//const newArr=arr.map((curVal)=>curVal.split(""));//[ [ 'My', 'name' ], [ 'is', 'vinod' ], [ 'thapa' ] ]
// const newArr=arr.map((curVal)=>curVal.split(""));//['M', 'y', ' ','n', 'a', 'm','e' ],[ 'i', 's', ' ','v', 'i', 'n','o', 'd' ],[ 't', 'h', 'a', 'p', 'a' ]]
// console.log(newArr);

//*------------------------------------
//* Object.fromEntries()
//*------------------------------------
//? Objects have an entries() method, since ES2017.
//? It returns an array containing all the object own properties, as an array of [key,value] pairs:

//? ES2019 introduces a new Object.fromEntries() method, which can creates a new object from such array of properties:
const person={name:"vinod",age:30};
const entries=Object.entries(person);//[ [ 'name', 'vinod' ], [ 'age', 30 ] ]
console.log(entries);

const newPerson=Object.fromEntries(entries);//{ name: 'vinod', age: 30 }
console.log(newPerson);

//// Now Think & let me know why 🤔:
console.log(person==newPerson);//false (bcz object are comparing through reference not only value)

//*---------------------------------------
//* String.prototype.{trimStart,trimEnd}
//*---------------------------------------
//! str.trim() (mostly used)

//? trimStart():Return a new string with removed white space from the start of the original string.
console.log("                Testing         ".trimStart());

//? trimEnd():Remove white Space from the end of the original string
console.log("              Testing          ".trimEnd());

//*---------------------------------------
//* Symbol.prototype.description
//*---------------------------------------
 
//In javaScript, a Symbol is a primitive data type introduced in ECMAScript 2015(ES6).It represents a unique identifier that is immutable and guaranteed to be unique.Symbols are often used as property keys in objects to avoid naming conflicts.

//? The Symbol.prototype.description property is a new feature introduced in ECMAScript 2019(ES10).It allows you to retrieve the description of a symbol, you can optionally provide a description as its parameter. the description property lets you access this description.

const mySymbol=Symbol("This is my symbol");
console.log(mySymbol.description);
console.log(typeof(mySymbol));//symbol

//*---------------------------------------
//* Optional catch binding
//*---------------------------------------
//? In ECMAScript 2019(ES10),a new feature called "optional catch binding" was introduced for the try.....catch statement.This feature allows you to omit the parameter in the catch block,making it optional.

//?We previously had to do: 👇
try{
    //...
}catch(e){
    //handle error
}

//? Now we can omit that optional parameter(e):👇
try{
    //...
}catch{
    //handle error
}


