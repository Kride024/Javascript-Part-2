
// ECMAScript Features (2016):
//*---------------------------

//* 1. Exponentiation Operator:

//? ES7 introduces a new mathematical operator called exponentiation operator.This operator is similar to using Math.pow() method. Exponentiation operator is represented by double asterisk ** . The operator can be used only with numeric values.

//* Syntax
//base_value ** exponent_value

//? Basic usage:
let base=2;
let exponent=3;
console.log("using Math.pow()",Math.pow(base,exponent));
console.log("using exponentiation operator", base ** exponent);

//! Example: Calculate area of circle with radius 5 units.
let area=Math.PI * 5 ** 2;
console.log(area.toFixed(2));

//* 2. Array.includes() covered in part-1
