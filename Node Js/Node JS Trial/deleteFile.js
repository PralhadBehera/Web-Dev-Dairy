const fs = require('fs');

const filePath = 'example.txt';

// Delete the file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully!');
});
