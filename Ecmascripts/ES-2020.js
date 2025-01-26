//*---------------------------------------
//* ECMAScript Feature (2020)/ES11
//*---------------------------------------

//? List of new Useful features added in ES8 👇
//BigInt
//Nullish Coalescing Operator ??
//Optional Chaining Operator ?.
//promise.allSettled

//*---------------------------------------
//* BigInt
//*---------------------------------------

//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

//?Creating BigInts:
//? -Using the `n` suffix:

//Using the BigInt() constructor:
//* Example-1: 
const anotherLargeNumber=BigInt("123456789012345678901234567890");
console.log(anotherLargeNumber);
//* Example-2:
let maxNumber = Number.MAX_SAFE_INTEGER;
maxNumber = BigInt(maxNumber) + 10n;
console.log(maxNumber);

//*---------------------------------------
//* Nullish Coalescing Operator ??
//*---------------------------------------
//? In JavaScript , the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values.It returns its right-hand operand when its left-hand operand is null or undefined,otherwise,it returns the left-hand operand.

let favNum=0;//falsy
//userFavNum=favNum||10; //? Earlier Problem
//userFavNum=favNum??10;//? Modern solution
//console.log(userFavNum);

//*---------------------------------------
//* Optional Chaining Operator(?.)
//*---------------------------------------

//? It provides a concise way to access properties of an object without worrying about the existence of intermediate properties.It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.


const person={
    name:"John",
    address:{
        city:"New York",
        zipCode:12345,
    },
};

//?Accessing nested properties without optional chaining
//const city=person.address;
//* Example-1:
// const city=person.address?person.address.city:"city is not present";
// console.log(city);
//This method doesn't do error handling

//?with optional chaining
const city=person?.address?.city??"not found";
console.log(city);

//* Example-2:
const Route={
name:"John",
address:{
    city:"New York",
    zipCode:12345,
    coordinates:{
        latitude:40.7128,
        longitude:-74.006,
    },
   }, 
  };

const latitude=Route?.address?.coordinates?.latitude??"not found bhai";
console.log(latitude);

//*---------------------------------------
//* Promise.allSettled()
//*---------------------------------------
//? We will cover later in our promises section part of the video and you gonna love that part.