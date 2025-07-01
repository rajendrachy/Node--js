//-----------read2 file and the combine them in one file write-----------

const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err1, data1) => {
  if (!err1) {
    fs.readFile('file2.txt', 'utf8', (err2, data2) => {
      if (!err2) {
        const combined = `${data1}\n${data2}`;

        fs.writeFile('combined.txt', combined, 'utf8', (err3) => {
          if (!err3) console.log('Files combined successfully!');
          else console.error('Write error:', err3);
        });
      } else {
        console.error('Error reading file2:', err2);
      }
    });
  } else {
    console.error('Error reading file1:', err1);
  }
});






