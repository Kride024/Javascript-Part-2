//! what is javascript
// going to study Hoisting/Event loop , closure/call stack

//! 1: Parsing Phase
//* 1. Lexical analysis
//?lexical analyser,also know as a lexer , is the first step in the process of compiling a javascript program.It breaks the program down into tokens,which are the basic block of language.

//* 2. Syntax analysis
//? Takes the stream of tokens from lexical analysis and checks them for correct syntax.If the syntax is correct,syntax analysis generates a tree-like structure called a parse tree or abstract syntax tree(AST).
//? The AsT represents the hierarchical structure of the program.

//* 3. Compilation(JIT - Just-In-Time compilation):
//? After the AST is created,the Javascript engine typically goes through a compilation phase.modern engines,like v8 in chrome,spiderMoney in firefox , or JavaScriptCore in safari,this compilation often involves a combination of two approaches:
// In short it convert AST into machine code(Computer Understand)

//? this compilation often involves a combination of two approaches:
// Parse and compile: The engine parses the code and compiles it into an intermediate form,such as bytecode or machine code.

//? Just-In-Time Compilation(JIT):Some engines use JIt compilation,where the intermediate code is compiled just before execution.This allows the engine to optimize the code based on runtime information, improving performance.

//* 4. Execution:
//? Once the code is compiled , the javascript engine executes. During Execution, the engine creates execution contexts,manage the scope chain , handles variable assignments and calls functions.
//?two phases: creation phase(where variable and function are hoisted) and execution phase(where the code is actually run).
//  the js engine uses a call stack to keep track of the execution context.when a function is called, a new frame is added to the stack,and when the function completes,its frame is removed(LIFO)--last in first out.

//* More on inside execution phase
//! call stack:
// In the order to manage the execution contexts, the javascript engine uss a call stack.
// The call stack is a data structure that keeps track of the currently executing functions in a program.it operates 
// on the last In,First out(LIFO) principles, 
// meaning that the last function added to the stack is the first one to be executed and completed.

//! Heap Memory:
//The heap memory is where dynamically allocated memory resides.This is where objects,closure, and 
// other dynamically allocated data are stored.while the call stack manages the flow of execution and function contexts,the heap memory holds data that
// is referenced by these execution contexts.

//! Bonus we will see in PPt with animation:

//todo key activities during the creation phase includes:

//?Creating the global object(window in browser, global in Node.js).
//?setting up the this reference
//?Creating the outer environment reference (which is null for the global context).
//?Creating the variable environment and allocating memory for global variable and functions.
//?Before executing our code, js engine scan the code and creates a property for each variable or function in the code.For variable.It reserves space for them in memory and sets an initial value of undefined, and for functions it also reserves space but sets an initial value as a reference to the actual function in memory . That's why we can  call a function,but if we try to a variable, we will get undefined.
 
//Setting up the scope chain which initially contains only the global scope.

//! Execution Phase:
//? After the creation phase,the actual code execution takes place.this is when the js execution go through the code line by line.
//? variable are assigned their values, function are executed,and the program's logic is carried out.