var express = require('express');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://127.0.0.1:27017/sample', (err) => {
  console.log(err ? err : 'conected to database');
});
app.listen(3000, () => {
  console.log('listen to the port 3000');
});
