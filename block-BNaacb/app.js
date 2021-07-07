var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected to the database');
  }
);

var app = express();

app.get('/', (rej, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('connected to 3k port');
});
