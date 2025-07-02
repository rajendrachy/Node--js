//Read two file and write in the another file

const fs = require('fs');

fs.readFile('./file1.txt', 'utf-8' , (err1, data1) => {
         if(!err1) {
          console.log(`The data1 is : ${data1}`);

        fs.readFile('./file2.txt', 'utf-8', (err2, data2) => {
          if(!err2) {
            console.log(`The data2 is : ${data2}`);

              const combine = `${data1}\n${data2}`;

              fs.writeFile('combine.txt', combine, 'utf-8', (err3) => {
                 if(!err3) {
                  console.log("File added Successfully");
                 }
              })
          }
        })
      }
})

