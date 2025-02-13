 //*____________________________________________
 //*   Promises in Javascript:
 //*___________________________________________

 //? A promise is like a placeholder for the result of an asynchronous operation.

 //? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and clearly by providing a way to write asynchronous code that looks synchronous.

 //todo 👉In simpler terms, a promise is like a placeholder for the result of an asynchronous operation. Or A container for the future result or value.

 //* It can be in one of three states:

 //? Pending: Initial states, neither fulfilled nor rejected.
 //* Fulfilled(Resolved): The operation completed successfully.
 //! Rejected: The operation failed or encountered an error.

 //?Promises have built-in methods like then and catch to handle the results of asynchronous operation when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compare to traditional callback-based approaches.

  //*____________________________________________
 //*   Using the Promise Constructor(Class):
 //*___________________________________________

 //? You can create a promise using the Promise constructor. This involves creating a new instance of the Promise class, which takes a function as an 
 //? argument. This function, often referred to as the "executor function," takes two parameter: resolve and reject. You call resolve when the asynchronous operation is successful and reject when it encounter an error.

// const promise = new Promise(function(resolve,reject){ // your code goes here... });

 //* real life example:

 //todo 1: default state is pending

 //todo 2: Promise Made: Your friend promises to call you after 2 days at 6pm. This is similar to creating a promise in JavaScript.

 //todo 3: Pending Stage: During the 2-day period, you're in a "pending" stage.You're not sure whether your friend will fulfill the promise (call you) or break the promise (not call you). Similarity, when you create a promise in javascript, it starts in a pending state until it either resolves(fulfills) or rejects.

 //  todo 4: Resolution at a Specific Time: After 2 days and exactly at 6pm, you'll know whether the promise is fulfilled (resolved) if your friend calls you, or if it's broken (rejected)if your friend doesn't call.This align with the idea that promises in javascript resolve or reject often trigger by asynchronous operation at a specific point in time.

   //*____________________________________________
 //*   Using a Function  (Promise Wrapper):
 //*___________________________________________

 //? You can also create a promise by defining a function that returns a promise. This function usually encapsulates some asynchronous operation. Inside this function , you manually create a promise and resolve or reject it based on the result of the asynchronous operation.

 //syntax
//  function myPromiseFunction(){
//     return new Promise((resolve,reject)=>{
//         //Asynchronous operations here
//         //If successful,call resolve(value)
//         //If there's an error , call reject(error)
//     });
//  }

 // 1: By default promise has the pending state
 // 2: The moment we use setTimeout,we need to handle promises, we can do using then and catch


const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hey, I miss you");
    },2000);
 }).then((res)=>{
    console.log(res);
    }).catch((error)=>{
        console.log(error);
        }).finally(()=>{
            console.log("Don't Worry, we will miss you and keep smiling");
         });

// Example:2
const studentName="Alice";
const enrollStudent=(studentName)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const isSuccessful=Math.random()>0.4;
        if(isSuccessful){
            resolve(`Enrolled successful for ${studentName}`);
        }
        else{
            reject(`Enrolled failed for ${studentName}. Please try again.`);
            
        }
       },2000);
    });
}

enrollStudent(studentName).then((res)=>{
    console.log(res);
    }).catch((error)=>{
        console.log(error);
         }).finally(()=>{
            console.log("Enrollment process completed.");
            });