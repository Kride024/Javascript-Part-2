// console -> >> -> Application -> Local Storage 

//? Local Storage:

//! The localStorage object allows you to save key/value pairs in the browser.

// How to add the data from localStorage
localStorage.setItem("youtubeJsCorse","addingData");

//How to get data from localStorage
localStorage.getItem("youtubeJsCorse"); //If that key not available then it will show "null"


//How to remove the data from localStorage
localStorage.removeItem("youtubeJsCorse");


//todo Local Storage can only store strings,so when you want to store a complex data structure like an array or a object, you need to convert it to a string using JSON.stringify:

//? JSON mostly used in API's 
//Mostly use feature: JSON.stringify and JSON.parse
  
//* JSON.stringify: Converts a JavaScript object into a JSON string.

//useful when you want to send data to a server or store it in a text file,as 
//JSON is a common data interchange Formate.

// const data={name: "vinod","age": 30,"city": "pune"};
// const jsonString = JSON.stringify(data);
//console.log(jsonString);
//Output: '{"name":"Vinod","age":30,"city":"pune"}'

//* JSON.parse: Converts a JSON string into a JavaScript object.
//useful when you receive JSON data from a server or read it from a file, and
//you want to work with it as a Javascript object.

const jsonString = '{"name":"Vinod","age":30,"city":"pune"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);
//Output: {name:'Vinod',age:30,city:'pune'}
