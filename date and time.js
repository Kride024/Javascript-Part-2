//? Current date and time
//? new Date(): Creates a Date object representing the 
//?             current date and time.
const currentDate=new Date();
console.log(currentDate);
//todo This is the ISO 8601 format, which is a standard for representing dates and times. In this format.the date and time are represented together,separated by the letter "T".The "Z" at the end indicates that the time is in UTC(Coordinated Universal Time).

// But the same when you run on browser it will return more human-readable format.

//! 9 ways to create a new Date Objects

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day) //! whenever you do any changes,other data become random
// new Date(year,month,day,hours)
// new Date(year,month,day,hour,minute)
// new Date(year,month,day,hour,minute,second)
// new Date(year,month,day,hour,minute,second,ms)
// new Date(milliseconds) 

//? 2: new Date(dateString): Creates a Date object based on the provided date string.
const dateString="2025-01-18T10:49:36.854Z";
console.log(new Date(dateString));

//? 3: new Date(year,month): Creates a Date object with the specified year and month.
const date1=new Date(2025,2);
console.log(date1);

//? 4: new Date(year,month,day): Creates a Date object with the specified year,month, and day.
//* In javascript month start with '0' just like in array(Under this one)
const date2=new Date(2025,2,18);
console.log(date2);

//? 5: new Date(year, month, day, hours): Creates a Date object with specified year, month, day, and hours.
const date3=new Date(2025,1,16,10);
console.log(date3);

//? 6: new Date(year,month,day,hours,minute):minute included in this.
const date4=new Date(2025,1,16,10,4);
console.log(date4);

//? 7: new Date(year,month,day,hours,minute,seconds): seconds included in this
const date5=new Date(2025,1,16,10,4,7);
console.log(date5);

//? 8: new Date(year,month,day,hour,minute,seconds,ms):millisecond included here
const date6=new Date(2025,1,16,10,4,7,274);
console.log(date6); //* millisecond will be seen in vs but not in console 

//! To get millisecond :-
//? 9: new Date(milliseconds): Create a Date object representing the number of millisecond since the Unix epoch (January 1,1970,00:00:00 UTC).
const curMilliSeconds=new Date().getTime(); 
const dateFromMilliseconds=new Date(curMilliSeconds);//! Get Current Time through milliseconds
console.log(dateFromMilliseconds);

//todo Note:
// Javascript counts months from 0 to 11
//Javascript dates as milliseconds: as no. of millisecond since Jan 01,1970.

const date8= new Date("2024-01-05");
const date9=new Date("January 5,2024");
//const date10=new Date("05-01-2024");  //? This Format will  not consider
console.log(date8);
console.log(date9);
console.log(date10);


 