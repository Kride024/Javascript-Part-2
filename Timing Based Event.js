

//! Lists of Timing Based Events

// 1. setTimeout() : Copy Submit if given time is over kind of //! "delay"
// 2. clearTimeout()
// 3. setInterval() : On Given Interval,we have to perform particular task
// 4. clearInterval()

//! Syntax:
//? setTimeout():
// function myCallback(){ 
//     console.log("It schedule the callback function after a delay of 2000 milliseconds(2sec)");
// }

// setTimeout(myCallback,2000);

//? setInterval():
// function repeatedFunction(){
//     console.log("This function will be repeated every 1000 millisecond (1 second).");    
// }

// setInterval(repeatedFunction,1000);

//! Example:
//? setTimeout()
//  function delayedFunction(){
//     console.log("It schedule the callback function after a delay of 2000 milliseconds(2sec)",x);
//  }
//  setTimeout(delayedFunction,2000);
//  setTimeout(()=>delayedFunction(5),2000);
//? setInterval()
// function repeatedFunction(){
//     console.log("This function will be repeated every 1000 millisecond (1 second).");    
// }

// setInterval(repeatedFunction,1000);
//? clearTimeout(timeoutID):

//  function delayedFunction(){
//     console.log("It schedule the callback function after a delay of 2000 milliseconds(2sec)",x);
//  }
//  const myWork=setTimeout(delayedFunction,2000);
//  clearTimeout(myWork);
//todo: (imp)
//? clearInterval(intervalID):
//* it can'nt be done similar to clearTimeout()
// repeatedFunction();
// function repeatedFunction(){
//     console.log("This function will be repeated every 1000 millisecond (1 second).");    
// }

// const work=setInterval(repeatedFunction,1000);
// setInterval(()=>clearInterval(work),5000);

