//!---------------------------------------
//! ECMAScript Feature (2023)/ES14
//!---------------------------------------

//?List of new useful features added in ES8
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start,deleteCount,...items)
// Array.prototype.with(index,value)

//*-------------------------------------------------
//* Array.findLast() & Array.findLastIndex()
//*-------------------------------------------------
//? This function will allow us to find element from the last to first of the array based on a condition.
const array=[1,2,3,4,5,6,4];
console.log(array.findLast((elem)=>elem>4));
console.log(array.findLastIndex((elem)=>elem));

//*---------------------------------------
//* New Array.prototype functions
//*---------------------------------------

const myName=["vinod","bahadur","thapa","kodyfier"];

//?Array.prototype.toReverse():
const reversedNum=myName.toReversed();
console.log("Original",myName);
console.log("reversed",reversedNum);

//?Array.prototype.toSorted():
const sortedNum=myName.toSorted();
console.log("Original",myName);
console.log("Sorted",sortedNum);

//? Array.prototype.toSpliced(start,deleteCount,...items);
const spliceArr=myName.toSpliced(1,1,"thapaTechnical");
console.log("Original",myName);
console.log("spliced",spliceArr);

//? Array.prototype.with(index,value);
//* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value.It returns a new array with the changed element,leaving the original array unchanged.

const replaceWith = myName.with(1,"thapaTechnical");
console.log("Original",myName);
console.log("Replaced",replaceWith);

