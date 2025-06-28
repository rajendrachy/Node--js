const fs = require('fs').promises;
const path = require('path');

//----------------------------- File Paths -----------------------------
const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

const newFileName = "renamed-text.txt";
const newFilePath = path.join(__dirname, newFileName);

//--------------------------- Main Function ----------------------------
const performFileOperations = async () => {
  try {
    //------------------- 1. Write File ---------------------------------
    //* fs.writeFile(): Writes data to a file (creates or overwrites)
    const dataToWrite = "This is the initial Data, updated";
    await fs.writeFile(filePath, dataToWrite, 'utf-8');
    console.log("✅ File written successfully.");

    //------------------- 2. Read File ----------------------------------
    //* fs.readFile(): Reads file contents
    const data = await fs.readFile(filePath, 'utf-8');
    console.log("📖 File content:\n", data);

    //------------------- 3. Append File --------------------------------
    //* fs.appendFile(): Appends data to the file
    const dataToAppend = "\nThis is the appended data.";
    await fs.appendFile(filePath, dataToAppend, 'utf-8');
    console.log("📝 Data appended successfully.");

    //------------------- 4. Rename File --------------------------------
    //* fs.rename(): Renames the file
    await fs.rename(filePath, newFilePath);
    console.log("✏️ File renamed successfully.");

    //------------------- 5. Delete File --------------------------------
    //* fs.unlink(): Deletes the file
    await fs.unlink(newFilePath);
    console.log("🗑️ File deleted successfully.");

  } catch (err) {
    console.error("❌ Error during file operations:", err);
  }
};

performFileOperations();
