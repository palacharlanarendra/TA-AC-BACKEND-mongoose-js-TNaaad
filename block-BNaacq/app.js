var express = require('express');
var mongoose = require('mongoose');
var app = express();
mongoose.connect(
  'mongodb://127.0.0.1:27017/blog',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'conected to database');
  }
);
app.post('/blog', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    if (err) next('Fullfill the validations');
    res.json(user);
  });
  next('Fullfill the validations');
});
app.listen(4000, () => {
  console.log('listen to the port 3000');
});
