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

//* UseCase: when we want to get the user name and value in react (while making Registration form and login form)

//? Data Modeling:
// Use Object in real world to show details in organized way.

let car={
    brand:"Toyota",
    model:"Camry",
    year:2022,
    start:function(){
        console.log("Engine started");
          },
};
console.log(car);
car.start();

//! Interview Question:

//? Explain the difference between passing objects by reference and by value in Javascript.Provide an example to demonstrate each scenario.

//sol:In Javascript , primitive data types like numbers and strings are passed by value,while objects are passed by reference.
//? *  Passing by Value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to
//? a variable.Any change made to the copy do not affect the original value.

// let a=10;
// const modifyValue=(x)=>(x=20);
// console.log(modifyValue(a));
// console.log(a);

//? * Passing by reference: When passing by reference, a reference to the memory location of
//? the object is passed to the function or assigned to a variable. Any changes made to the object through this reference
//? will affect the original object.

// let obj={ id:5,name:"Modifier"};
// let obj1=obj;
// obj1.name="thapa technical";
// console.log(obj1);
// console.log("Original:" ,obj); // Through this way printing can only done

//* To avoid this behavior and create a true copy of that object,you can use methods like Object.assign() or the spread operator (...);

//* Object.assign():is used to copy properties from one or more source objects to a target object.

// let obj={ id1:5,name1:"Modifier"};
// let obj1={ id2:5,name2:"Modifier"};
// let obj2={ id3:5,name3:"Modifier"};
// let objNew=Object.assign({},obj,obj1,obj2);
// console.log(objNew);

//? Comparison by Reference:

// Two objects are equal only if they refer to the same object.
// Independent objects (even if they look alike) are not equal.
//(address matter)

// const obj1={ id2:5,name2:"Modifier"};
// const obj2={ id2:5,name2:"Modifier"};
// const obj3=obj1;

//  const isEqual=obj1==obj3?true:false;
//  console.log(isEqual);
 
//? JSON (JavaScript Object Notation):
 // 1. JSON.stringify(...)
 //2. JSON.parse(...)

 //? "this" object:

 //* The "this" keyword refers to different objects depending on how it is used:

 //In an object method,this refers to the object.
 //Alone,this refers to the global object.
 //In a function,this refer to the global object.
 //In a function,in strict mode,this is undefined.
 //In an event,this refers to the element that received the event.
 //Methods like call(),apply(),and bind() can refer this to any object.

 //? Object useful methods:

 const product={
    id:1,
    name:"Laptop",
    category:"Computer",
    brand:"ExampleBrand",
    price:999.99,
    stock:50,
    description:
    "Powerful laptop with a quad-core i5 processor,8GB RAM,226GB SSD,and 14-inch display",
    image:"Image used during product",
 };

 //? 1:Object.keys():ids array

//  let keys=Object.keys(product);
//  console.log(keys);

 //? 2:Object.values():values array

//  let values=Object.values(product);
//  console.log(values);

  //? 3:Object.entries():entries(both key and values) array individually after that combine array arrays.

  // let entries=Object.entries(product);
  // console.log(entries);

  //? 4:Object.hasOwnProperty():boolean return either present or not

  // console.log(product.hasOwnProperty(`name`));
  // console.log(product.hasOwnProperty(`is`));
  
  //? 5:Object.assign():assign value to empty object from copies of original (could be more than one object)
 
  // const target={a:1,b:2,};
  // const source={b:7,c:8,};(both work)
  // console.log(Object.assign({},target,source));
  // console.log(Object.assign(target,source));
  
  
 //? 6:Object.freeze():freeze an object,no modification are possible.

//  Object.freeze(product);
//  product.id=7;
//  console.log(product);
 
//! Interview Question:

//? 1.Output:

  // const target={a:1,b:2,};
  // const source={b:7,c:8,};
  // console.log(Object.assign({},target,source));
  //Output:{ a: 1, b: 7, c: 8 }

 //? 2.Object Manipulation
 //? Given object add new sub with grade and check grade properly implemented.
 
 let student={
  name:"Bob",
  age:20,
  grades:{
    math:90,
    science:85,
    history:88,
  },
 };

//  student.grades[`computer`]=92;
// student.grades.computer=92;
 console.log(student);

 //? 3. Object have Properties and values are same
 
 let obj1={name:"Alice",age:26,city:"New York",};
 let obj2={name:"Alice",age:26,city:"New York",};
 let obj3={name:"Bob",age:26,city:"Sans",};

 const areObjectEqual=(obj1,obj2)=>{
  let o1=Object.keys(obj1);
  let o2=Object.keys(obj2);
  if(o1.length!=o2.length)return false;
  for(let key in obj1){
    console.log(obj1[key]);
    
    if(obj1.key!=obj2.key)return false;
    
    
  }
  return true;
}

 console.log(areObjectEqual(obj1,obj3));
 
 




