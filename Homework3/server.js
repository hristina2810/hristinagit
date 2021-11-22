require('dotenv').config();
const http = require('http');
const app = require('./app');

const PORT = process.env.PORT;
const server = http.createServer(app);

serever.listen(PORT, () => {
    console.log('Server running');
});
