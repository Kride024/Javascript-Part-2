 //!____________________________________________
 //!   Event Propagation
 //!___________________________________________

 // A language feature where functions are treated as first-class citizens.
 // Functions can be assigned to variables,passed as arguments to other functions, and returned from other functions.

 //?  Display the results of the operations.
//*_______________________________________________
 //* First-Class Function - it's just a concept
 //*_______________________________________________

 //A language feature where functions are treated as first-class citizens.
 //Functions can be assigned to variable, passed as arguments to other functions,
 //and returned from other functions.
  
 //? A "first-class function" means that functions can be treated as values.assigned to variables and passed around as arguments.

 function sayHello(name){
    return "Hello," + name +"!";
}

var greetFunction=sayHello;

console.log(greetFunction("kristi"));

 //*____________________________________________
 //*   Higher-Order Function:
 //*___________________________________________
//? Definition: A higher-order function is a function that takes one or more functions as arguments or return a function as a result.

 //*____________________________________________
 //*   Callback Functions:
 //*___________________________________________
 //? Definition: A callback function passed as an argument to another function and executed after the completion of a task.
 
 
 //* Here is the example:
 //callback function
 function processUserInput(name,callback){
console.log("Received input:" + name);
callback(name);
}

// function to be used as a callback
function greetUser(name){
    console.log(`Hello! ${name}`);   
}

processUserInput("Vinod",greetUser);
//function call pass as argument called higher order function.


 //*____________________________________________
 //*   Closure:
 //*___________________________________________

 //Already taught in why we need js ?

 
 //*__________________________________________
 //!  InterView Questions
 //*__________________________________________
 
 //? Define a higher-order function called mathOperation that takes three parameters: x,y, and operation.
//? Implement two callback Function;
//? add: Takes two numbers x and y and returns their sum.
//? sub: Takes Two numbers x and y and returns the result of subtracting x from y.
//? Use the mathOperation function to perform addition and subtraction operations on Two variables a and b.
//? Display the results of the operations.

const mathOperation=(a,b,operation)=>{
    return operation(a,b);
};
const add=(a,b)=>{
    return a+b;
};
const sub=(a,b)=>{
    return b-a;
}
console.log(mathOperation(5,15,add));
console.log(mathOperation(5,15,sub));