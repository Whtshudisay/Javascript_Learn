let name = 'Yash';
let age = 23;
let isOnline = true;

let str1 = `My name is ${name}, my age is ${age}, and I am ${isOnline ? 'online' : 'offline'}`;
console.log(str1);

let str = new String('yash'); 
console.log(str[2]); 

console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.indexOf('name'));
console.log(str1.lastIndexOf('name'));
console.log(str1.charAt(3));
console.log(str1.endsWith('offline'));
console.log(str1.includes('age'));
console.log(str1.substring(3, 7));
console.log(str1.slice(3, 7));
console.log(str1.split(' '));
console.log(str1.replace('name', 'Name'));
console.log(str1.trim());
console.log(str1.trimLeft());
console.log(str1.trimRight());
console.log(str1.repeat(3)); // how to add space in between the repeated strings
console.log(str1.concat(' ', ' yash'));
console.log(str1.padStart(20, 'a'));
console.log(str1.padEnd(20, 'a'));
console.log(str1.startsWith('My'));
console.log(str1.search('name'));
console.log(str1.match(/name/g));

