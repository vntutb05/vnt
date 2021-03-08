const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const server = require('./config/server');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/assets',express.static(__dirname+'/public'));

app.set("view engine","ejs");
server(app);