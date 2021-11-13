const http = require('http')
const server = http.createServer()

fileOperations = require('./promises');
     fileWriter('pathToFile','adults')
     .then(() =>{
     console.log('Success');
})
     .catch((err) =>{
       console.log(err);
     });


server.listen(8080,()=> {
console.log("server starter")
});