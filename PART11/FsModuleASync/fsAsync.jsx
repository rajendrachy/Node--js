const fs = require('fs');
const path = require('path');

//----------------------------- File Paths -----------------------------
const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

const newFileName = "renamed-text.txt";
const newFilePath = path.join(__dirname, newFileName);

//------------------- 1. Write File (Asynchronous) ---------------------
//* fs.writeFile(): Writes data to a file. Creates file if not exists or overwrites if exists.
//! Syntax: fs.writeFile(filePath, data, options, callback);
//? filePath: Path of the file
//? data: The content to write
//? options: Optional. Encoding ('utf-8')
//? callback: Function that handles error
//* -------------------------------------------------------------------

const dataToWrite = "This is the initial Data, updated";

fs.writeFile(filePath, dataToWrite, 'utf-8', (err) => {
  if (err) return console.error("❌ Error writing file:", err);
  console.log("✅ File written successfully.");

  //------------------- 2. Read File (Asynchronous) ----------------------
  //* fs.readFile(): Reads content of a file asynchronously.
  //! Syntax: fs.readFile(filePath, options, callback);
  //* --------------------------------------------------------------------

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return console.error("❌ Error reading file:", err);
    console.log("📖 File content:\n", data);

    //------------------- 3. Append File (Asynchronous) ---------------------
    //* fs.appendFile(): Appends data to a file. Creates file if not exists.
    //! Syntax: fs.appendFile(filePath, data, options, callback);
    //* ---------------------------------------------------------------------

    const dataToAppend = "\nThis is the appended data.";

    fs.appendFile(filePath, dataToAppend, 'utf-8', (err) => {
      if (err) return console.error("❌ Error appending to file:", err);
      console.log("📝 Data appended successfully.");

      //------------------- 4. Rename File (Asynchronous) ----------------------
      //* fs.rename(): Renames or moves a file asynchronously.
      //! Syntax: fs.rename(oldPath, newPath, callback);
      //* ----------------------------------------------------------------------

      fs.rename(filePath, newFilePath, (err) => {
        if (err) return console.error("❌ Error renaming the file:", err);
        console.log("✏️ File renamed successfully.");

        //------------------- 5. Delete File (Asynchronous) ----------------------
        //* fs.unlink(): Deletes a file asynchronously.
        //! Syntax: fs.unlink(filePath, callback);
        //* ----------------------------------------------------------------------

        fs.unlink(newFilePath, (err) => {
          if (err) return console.error("❌ Error deleting the file:", err);
          console.log("🗑️ File deleted successfully.");
        });
      });
    });
  });
});
