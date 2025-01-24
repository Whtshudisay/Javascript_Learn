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
