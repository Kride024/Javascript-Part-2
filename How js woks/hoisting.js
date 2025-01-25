//? Hoisting is a JavaScript mechanism where variables and function declared are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//todo When a function declaration is hoisted,its entire definition (including the body) is moved to the top of its containing scope during the creation phase.This means that you can call the function before it's actually declared in the code, and it will still work as expected.

console.log(myVar);
greet();
var myVar=10; 
function greet(){
    console.log("Welcome");
    }

//! This don't work for let and const and fet arrow function.(Hoisting don't work In this case)

// console.log(myVar);
// greet();
// var myVar=10; 
// const greet=()=>{
//     console.log("Welcome");
//     }
  
   
    