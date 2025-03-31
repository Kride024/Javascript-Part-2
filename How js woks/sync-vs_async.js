//* Synchronous(wait) code executes line by line blocking further execution until each line is completed, while asynchronous code allows other code to continue
//executing while it wait for an asynchronous(together) operation to complete.
//? Example 1(Synchronous)
// const fun2=()=>{
//     console.log("fun2 is started");
//     };

//     const fun1=()=>{
//         console.log("fun1 is stated");
//         fun2();
//         console.log("fun1 ended");
//     }
//     fun1();
  
//? Example 2(aSynchronous) 
// const fun2=()=>{ //! setTimeOut((),2000) it go in "Web APIs" and other go in "CALl STACK"
//     setTimeOut(()=>{
//         console.log("fun2 is started");
//    },2000);
    
//     };
//     const fun1=()=>{
//         console.log("fun1 is stated");
//         fun2();
//         console.log("fun1 ended");
//     }
//     fun1();