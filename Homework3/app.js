const express = require ('express')
const cors = require ('cors')
const router = require ('./routes');

const app = express();

app.use (cours());
app.use (express.json());
app.use (express.urlencoded({ extended:false }));
app.use (router);


modele.exports = app



