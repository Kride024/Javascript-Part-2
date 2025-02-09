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