console.log("yml");

let score = "4cwvcy";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

let valueInString = String(score);
console.log(valueInString);
console.log(typeof valueInString);

let valueInBoolean = Boolean(score);
console.log(valueInBoolean);
console.log(typeof valueInBoolean);

// "33" => 33
// 33 => "33"
// "33" => true
// 0 => false
// 1 => true
// "" => false
// " " => true
// "0" => true
// "false" => true
// "true" => true
// "undefined" => true
// "null" => true
// "NaN" => true
// "Infinity" => true

let str1 = "Hello ";
let str2 = "world";
let str3 = str1 + str2;

console.log(str1 + str2); // Hello world
console.log(typeof str3); // string
console.log("hello world" * 3); // NaN
console.log(1 + "2");   // 12
console.log(1 + 2 + "3");   // 33
console.log("1" + 2 + 3);   // 123
console.log(1 + "2" + 3);   // 123
console.log(1 + 2 + 3);   // 6
