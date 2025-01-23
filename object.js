//! Javascript Object

//? What is an Object?

//1. Object are fundamental part of javascript providing a way to group related data and function together. In javascript, an object is a collection of key-value pairs,where each key is string (or a symbol)and each value can be any data type,including other object.
//2. object can have properties and method,making them versatile for various use cases. 
//3. grp together data type string number,method, function even objects
//4.object ke duniya mei function ko method kehte hai bhaijan

//syntax- obj={}
//arr=[],obj={},str="",char=''

//? Creating Object:

//*There are several ways to create object in javascript.The most common one is using object literals:

// const product={
//     id:1,
//     pName:"laptop",
// };

// let person={
//     name:"Vinod",
//     age:30,
//    "is'Student":false,
//     greet:function(){
//         console.log("Welcome to world Best CSS Course");
//        },
// };



//? Accessing Properties:

//*You can access object properties using dot notation"." or square bracket notation"[]":

// console.log(person[`name`]);
// console.log(person[`age`]);
// console.log(person[`is'Student`]);//Use bracket for key that's imp
// person.greet();
//to avoid use always bracket but with bracket use back tick "[`....`]" otherwise it shows undefine

//? Adding and Modifying Properties:

//you can add new properties or modify existing ones:
// person.job="web dev";
// person[`age`]=21;
// console.log(person);


//?Method:

// person.greet();

//? We can add dynamic Keys in an object:

// let idType="studentId";

// let student={
//     [idType]:"A123456",
//     sName:"Vinod",
//     sAge:29,
//     isStudent:true,
//     greet:function(){
//         console.log(
//             `Hey,my ${idType} is ${student[idType]} and my name is ${student.sName}`
//         );
        
//     },
// };
//  student.greet();