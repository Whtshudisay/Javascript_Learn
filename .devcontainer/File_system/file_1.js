const fs = require('fs'); 

// console.log(fs);

// fs.mkdir('fileSystemTest', {recursive: true}, (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Directory created successfully');
//     } //async 
// });

// console.log('after mkdir call');

fs.mkdirSync('fileSystemTestSync'); //sync
console.log('Directory created successfully');
console.log('after mkdirSync call');
