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
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hour,minute)
// new Date(year,month,day,hour,minute,second)
// new Date(year,month,day,hour,minute,second,ms)
// new Date(milliseconds) 

//?2: new Date(dateString): Creates a Date object based on the provided date string.
const dateString="2025-01-18T10:49:36.854Z";
console.log(new Date(dateString));
