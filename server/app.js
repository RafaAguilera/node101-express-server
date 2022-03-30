const express = require('express');
const morgan = require('morgan');
const data = require('../server/data.json')

// create your express server below

const app = express();
app.use(morgan('dev'));

// add your routes and middleware below
app.get('/data', function (req, res){
res.json(data);
});

app.get('/', function(req, res){
res.status(200).send('all top spots');
});

app.get('*', function(req, res){
res.end('Not Found');
});

// finally export the express application
module.exports = app;
