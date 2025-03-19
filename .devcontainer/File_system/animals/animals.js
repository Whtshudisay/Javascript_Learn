const cat = require('./cats');
const dog = require('./dogs'); 
const elephant = require('./elephant');

const animals = [ cat, dog, elephant ];
console.log(animals);

for(let a of animals) {
    console.log(`${a.name} is ${a.color}`);
    console.log(a.sound());
}