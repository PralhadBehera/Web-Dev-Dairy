const fs = require('fs');

const data = 'Hello, this is some content!';
const filePath = 'example.txt';

fs.writeFile(filePath, data, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});
