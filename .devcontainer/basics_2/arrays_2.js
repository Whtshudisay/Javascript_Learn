// const marvel_heros = ['thor', 'ironman', 'hulk', 'black_widow', 'spiderman'];
// const dc_heros = ['batman', 'superman', 'flash', 'deadpool', 'wolverine'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// let all = marvel_heros.concat(dc_heros);
// console.log(all);

// let anotherAll = [...marvel_heros, ...dc_heros];
// console.log(anotherAll);

let arr = [1233, 2134, 5, 7664, 3, 154,[43, 5, 65, 34, [3252, 56, 235,['wwfw','abc',['true','false',true,false]],3525, 54, 73]]]; // to get all elements in one single array i.e no nested arrays left
let anotherArr = arr.flat(Infinity); // argunment required to specify DEPTH
let anotherArr2 = arr.flat(2);
console.log(anotherArr);
console.log(anotherArr2);