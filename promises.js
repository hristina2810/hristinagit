const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname,'Homework1.txt')
const fileWriter = async() => {
    await fs.writeFile('C:/Users/Hristina/Desktop/Homework1/MyDocument.txt','adults')
}

const fileRead = async() => {
const data = await fs.readFile(pathToFile);
console.log(data.toString('Homework1'));
}
