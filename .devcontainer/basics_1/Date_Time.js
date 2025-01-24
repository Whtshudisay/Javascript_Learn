// console.log(new Date().toDateString());

let myDate = new Date();
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());

// months start from index 0 not from 1.

const myCreatedDate = new Date(2025, 4, 24);
console.log(myCreatedDate.toDateString()); 

// let myTimeStamp = Date.now();
// console.log(myTimeStamp.toString());
// console.log(myCreatedDate.getTime());

let mt = new Date();
let myYear = mt.getFullYear();
let myMonth = mt.getMonth(); // Note: getMonth() returns 0-11 (Jan-Dec)
let myDay = mt.getDay(); // Note: getDay() returns 0-6 (Sun-Sat)
let myTime = mt.getTime();
let myDates = mt.getUTCDate();

console.table({ myYear, myDates, myMonth, myDay, myTime });
