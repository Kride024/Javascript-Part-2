//*------------------------
//* EC-2017 / S8
//*------------------------


//? List of new features added in ES8
//String padding
//Object.values()
//Object.entries()
//Object.entries()
//Trailing commas in function parameter lists and calls
//Async functions

//*------------------------
//* String padding
//*------------------------

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a specific length.

//todo Use Case: Makes formatting text easier and more predictable,especially for tables,alignment,UI elements.No more messy, lines disrupting your visual spells!

//? Using padStart() to pad from the beginning
const companyName="kodyfier";
// const paddedName=companyName.padStart(40);
// console.log(paddedName);
// console.log(paddedName.length);

//? using padEnd() to pad from end
const paddedName=companyName.padEnd(40,"*");
console.log(paddedName);

//todo key points:
//? Both padStart() and padEnd() creates a new padded string without modifying the original one.

//? They take two arguments:
//?  -targetLength: The total length of the padded string.
//?  -padString (optional):The string to use for padding(default spaces).

//?If the original string is already longer than or equal to targetLength it's returned as-is.

//*------------------------
//* trailing commas
//*------------------------
//? This feature allows to have  trailing commas in function declarations,function calls,array literals and object literals:

function greet(name,age,){
    console.log(`Hello ${name}, you are ${age} year old.`);
}; 

//*--------------------------------------
//* Object.entries() & Object.values()
//*--------------------------------------

//? We have covered this in Object section.Go Watch that section 

//*--------------------------------
//* Async Await - Async Function
//*--------------------------------

//? We will cover later in the video and you gonna love that part, final project based on async await.






