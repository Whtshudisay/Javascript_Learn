console.log("yml");

// alert("Hello, World!"); we are using alert to display the message in the browser but we are using Node.js

console.log(3 + 9);

console.log(typeof null); // null is an object
console.log(typeof undefined); // undefined is undefined

// bigInt
// String
// boolean
// null => standalone data type
// undefined
// symbol => unique identifier
// objects


const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
console.log(id1 == id2); // false

let myObj = { name: 'yash', age: 23, isOnline: true, [id1]: 123 };

console.log(myObj);

let userOne = { id: "ddl", name: "bc", age: 3 }; 
let userTwo = userOne;

userTwo.age = 24;

console.log(userTwo);
console.log(userOne);