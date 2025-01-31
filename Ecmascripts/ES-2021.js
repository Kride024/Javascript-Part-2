//*---------------------------------------
//* ECMAScript Feature (2021)/ES12
//*---------------------------------------

//? List of new useful feature added in ES8
// String.prototype.replaceAll()
// Logical Assignment Operator (||=,&&=,??=)
// Numeric Separator
// Promise.any()

//*---------------------------------------
//* String.prototype.replaceAll()
//*---------------------------------------
//? replaceAll in JavaScript is a function that replaces all occurrences of a specified value with another value in a given string.

//? Replacing all occurrences of a word:
// const originalString = "Hello, world! Hello again.";
// const newString = originalString.replace("Hello","Hi");
// console.log(newString);

//? Replacing multiple space with single space
// const text="This       has      extra            spaces";
// const normalizedText=text.replaceAll(/\s+/g," ");
// console.log(normalizedText);

//*----------------------------------------------
//* Logical Assignment Operator (||=, &&=,??=)
//*----------------------------------------------

//? Logical OR-Assignment(||=):This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value(false,null,undefined,0,'',NaN).Otherwise,it leaves the left-hand operand unchanged.
// let x=false;
// x||=true;//x=x||true;
// console.log(x);

// let y=10;
// y||=20;//y=y||20;
// console.log(y);//10

//? Logical AND-Assignment (&&=):This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value.Otherwise,it leaves the left-hand operand unchanged.
// let x=true;
// x &&= false;
// console.log(x);//false

// let y=10;
// y &&=20;//equivalent to: y=y&&20;
// console.log(y);//20

//*---------------------------------------
//* Numeric Separator
//*---------------------------------------
//? This feature allows underscore(_) to be used as separators within literals to improve readability.
const bigNumber=1_000_000;
console.log(bigNumber);//1000000

//*---------------------------------------
//* Promise.any()
//*---------------------------------------
//? Promise.any(): This method takes an iterable of Promise objects and returns a single Promise that resolves as soon as any of the input Promises fulfill.

const promise1 = new Promise((resolve,reject)=>
setTimeout(resolve,200,"Promise 1")
);
const promise2 = new Promise((resolve,reject)=>
    setTimeout(resolve,200,"Promise 2")
    );
const promise3 = new Promise((resolve,reject)=>
        setTimeout(resolve,200,"Promise 3")
        );
     
//*---------------------------------------
//* .at()
//*---------------------------------------
//? Before ES2022, square bracket notation was used to fetch a particular element in an array. This method is straightforward unless you need to perform a backward iteration, i.e., negative indexing.In the case of negative indexing, the common practice was to use arr[arr.length-N],where array length is referred to and indexing from the end.

//? The .at() method introduced in ES2022 has simplified this process.In a case of positive indexing, .at() will work the same as the square brackets. But for negative indexing, .at() start iterating from the end.

const array=[1,2,3,4,5,6,7];
console.log(array.at(-1));

//todo Note Datatypes supporting this function.👇

