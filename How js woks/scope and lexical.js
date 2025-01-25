//* Scope in Javascript

//? Scope in Javascript refers to the context in which variables are declared and accessed. It defines the
//visibility and lifetime of variables.when a variable is declared,it is bound to a specific scope,
//and  its accessibility is determined by that scope.

// todo we have a Global Scope,Function Scope and Block Scope.

//* Lexical Scoping:(Manager decide where variable value could used)

//? Lexical scoping is a way of managing variable access in js based on the physical structure of the code.
//? key Concept: The scope of a variable is determined by its position in the source code, specification where it is declared.
//? Lexical scoping in Javascript is like a set of rules that determines where a variable can be used in your code. It follows the physical structure of your code, so if a variable is declared inside a function or block, it can usually be used only within that function or block.

// var a=3;
// var b=2;
// what will be the value of a ?

//*Scope chaining:

//? Definition:rule through which we look value of a variable,checks the current scope and then looks in the outer(enclosing) scopes until it finds the variable or reaches the global scope.

//todo key concept: Variables in inner scopes have access to variables in their outer scopes, creating a chain of accessible scope.

//* Global Vs Local
//? Global Variables: Global visibility and can be accessed from anywhere.
//?Local Variables: Has local visibility, limited to function or block scope.