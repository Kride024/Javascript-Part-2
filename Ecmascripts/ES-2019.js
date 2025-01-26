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



