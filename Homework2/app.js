const express = require('express');
const router =require('./routes');

express.json();
express.unlencoded();

const app = express();
app.use(expres.json());
app.use(express.urlencoded({extended:false}));
app.use(router);

module.exports = app