//*  Ecmascript 2015

//! Part-1:

//? 1.Let AND Const

//? 2.Backtick (``)

//? 3.Default value for function parameter
// fun sum(a=8,b=0){return a+b;} used when only one argument passed

//? 4.FAT Arrow function

//! Part-2:(Modern js)

//* 1.Object property

// const name="vinod";
// const age="30";

//? traditional way
// const person={name:name,age:age};
//? using shorthand notation for object property
// const person={name,age};

// insert of specifying name:name and age:age, you can simply specify name and age directly within object literals.

//* 2.Destructuring 

//? Destructuring in js is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner, avoid repetitive copying of values.

//* Destructuring Arrays:
//? 1: Extracting specific elements:
const number=[10,20,30];
const first=number[0]; //Traditional way

//? 2:Ignoring elements:
const [,,third]=number; //Modern Way 

//! 3.Interview Questions
//! Write a program to swap two variables without using 3rd variable?
let a=10;
let b=30;
//let c=b;//c=30
// b=a;//b=10
// a=c;//a=30

//? Without using 3rd variable
[a,b]=[b,a];
console.log(a,b);

//* 4. Destructuring Objects:
const user={name:"vinod",age:30};
// we will se its real life use in weather app

//? Extracting properties:
// const name=user.name;//Traditional
// const {name,age}=user; 
// const {age,name}=user; // written value will search across user then relocate value on comparison

// console.log(name,age);//vinod 30
// console.log(age,name);//30 vinod

//? Renaming properties:
const {name:fullName,age}=user; 
console.log(fullName);//vinod

//-------------------------------------------------

//* Spread operator [ES-6]

//Javascript ES6 introduced the spread operator.The syntax is three dots(...) followed by the array (or iterable*).

//? 1.Copying an array
// let fruits = ["Apple","Orange","mango","banana"];
// let newCollection=[...fruits];
// console.log(newCollection);



//? 2.Concatenating arrays/Combining arrays
// const number1=[1,2,3,4];
// const number2=[4,5,6];
// const newNumbers=[...number1,...number2];
// console.log(newNumbers);[1, 2, 3, 4, 4, 5, 6]
  


//? Adding to existing array

//* Transition:
// let fruits = ["Apple","Orange","mango","banana"];
// fruits.push(1);
// fruits.push("banana","hum",0);
// console.log(fruits);

//* Modern:
//Ex-1:
// let fruits = ["Apple","Orange","mango","banana"];
// const number1=[1,2,3,4];
// fruits.push(...[...number1]);
// console.log(fruits);
//Ex-2:
// let fruits = ["Apple","Orange","mango","banana"];
// fruits.push(...["guava","apple","0"]);// both number and string can push together
// console.log(fruits);

//! One more useCases
//? In JavaScript, when you spread a string using the spread syntax (...), it converts the string into an array of its individual characters.

//? Traditional way
// const country="INDIA";
// console.log(country.split(""));

//? New way of doing it
const country ="INDIA";
console.log([...country]);

//? Rest parameter -Modern JavaScript

// The rest parameter syntax allows a function to accept an indefinite number of argument as an array, providing a more flexible way to work with function that can accept varying numbers of arguments.

//* Tradition way
// const sum=(a,b,c,d)=>{
//     return a+b+c+d;
// };
//* with rest parameters
const sum=(a,b,...numbers)=>{
    return numbers.reduce((acc,curVal)=>(acc+=curVal),0);
}
console.log(sum(1,2,3,5,7,8));

// TODO NOTE:  A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
// function wrong1(...one,...wrong){}
// function wrong2(...wrong,arg1,agr2){}


