const fs = require('fs/promises');
const path = require('path');
    const pathToWrittenFile = path.join(__dirname,'NovFolder.txt')
const fileRead = async() => {
    const data = await fs.readFile(pathToFile)
    console.log(data.toString());
 }
const fileWriter = async(contentToBeWritten) => {
    await fs.writeFile(pathToWriteFile,'adults')
}

 module.exports = {
    fileReader,
    fileWriter,
  
     
 }




