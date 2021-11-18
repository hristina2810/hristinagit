const express = require('express');
const router =require('./routes')

const app = express();
app.use(expres.json());
app.use(express.urlencoded({extended:false}));
app.use(router);