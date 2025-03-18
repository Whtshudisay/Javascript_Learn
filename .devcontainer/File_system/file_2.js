const fs = require('fs');

const argv = process.argv[2] || 'project';
const fileName = process.argv[3] || 'fileSystemTest.txt';
try {
    fs.mkdirSync(argv);
    fs.writeFileSync(`${argv}/${fileName}`, '');
} catch {
    console.log('Error creating directory');
    console.log(e);
}


// fs.writeFileSync(`${argv}/app.js`, '');
// fs.writeFileSync(`${argv}/styles.css`, '');