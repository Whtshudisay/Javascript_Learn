console.log("Arrays_1");

let arr1 = [1, 2, 3, 4, "yash", 'hello world', true, null, [1, "10", false, 2.00, Symbol('1123')]];
// console.log(arr1);
// console.log(arr1[8][4]);

// console.log(arr1[1] + arr1[3]);

// console.log(arr1.push(12));
// console.log(arr1.pop(3));
// console.log(arr1.length);

let arr2 = new Array('xyz','abc','pqr','def','efg');
let arr3 = arr2.join('-');
console.log(arr3);
console.log(arr3.includes('abc'));
console.log(arr2.includes('tuy'));

const myNewArray = arr2.slice(2, 4);
console.log(myNewArray);