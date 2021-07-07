var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Scheme;
var app = express();

mongoose.connect(
  'mongodb://localhost:27017',
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected to the mongo DB');
  }
);

app.listen(3000, () => {
  console.log('Server listening to the port 3000');
});
