//*---------------------------------------
//* ECMAScript Feature (2020)/ES11
//*---------------------------------------

//? List of new Useful features added in ES8 👇
//BigInt
//Nullish Coalescing Operator ??
//Optional Chaining Operator ?
//promise.allSettled

//*---------------------------------------
//* BigInt
//*---------------------------------------

//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

//?Creating BigInts:
//? -Using the `n` suffix:

//Using the BigInt() constructor:
//* Example-1: 
const anotherLargeNumber=BigInt("123456789012345678901234567890");
console.log(anotherLargeNumber);
//* Example-2:
let maxNumber = Number.MAX_SAFE_INTEGER;
maxNumber = BigInt(maxNumber) + 10n;
console.log(maxNumber);

//*---------------------------------------
//* Nullish Coalescing Operator ??
//*---------------------------------------
//? In JavaScript , the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values.It returns its right-hand operand when its left-hand operand is null or undefined,otherwise,it returns the left-hand operand.

let favNum=0;//falsy
//userFavNum=favNum||10; //? Earlier Problem
//userFavNum=favNum??10;//? Modern solution
console.log(userFavNum);



