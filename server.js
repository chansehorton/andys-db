'use strict'

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const contacts = require('./app/routes/contacts');

app.use(express.static(path.join(__dirname, '/app/public')));

app.use(bodyParser.json());

app.use('/contacts', contacts);

app.use('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/app/public')});
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
