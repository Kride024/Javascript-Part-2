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