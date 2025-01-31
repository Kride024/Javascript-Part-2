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






