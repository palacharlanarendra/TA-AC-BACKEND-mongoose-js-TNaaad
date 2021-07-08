var express = require('express');
var mongoose = require('mongoose');
var User = require('./model/user');
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected to mongo dbserver');
  }
);
var app = express();

app.use(express.json());

app.post('/users', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    if (err) next('Fullfill the validations');
    res.json(user);
  });
  next('Fullfill the validations');
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) next(err);
    res.json(users);
  });
});
// find will show all the list of the users collection.
app.get('/usersname', (req, res) => {
  User.find({ name: 'narendra' }, (err, user) => {
    if (err) next(err);
    res.json({ users: user });
  });
});
//findOne will show only one result of the selected property.
app.get('/usersone', (req, res) => {
  User.findOne({ name: 'narendra' }, (err, user) => {
    if (err) next(err);
    res.json({ users: user });
  });
});
//findById- it will show the only document which is related to the specific given Id.
app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, product) => {
    if (err) next(err);
    res.json(product);
  });
});

// update

app.put('/usersname', (req, res) => {
  User.update({ name: 'narendra' }, { new: true }, (err, users) => {
    if (err) next(err);
    res.json(users);
  });
});
app.put('/usersone', (req, res) => {
  User.updateOne({ name: 'narendra' }, { new: true }, (err, users) => {
    if (err) next(err);
    res.json(users);
  });
});
app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
    if (err) next(err);
    res.json(user);
  });
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
    if (err) next(err);
    res.json(user);
  });
});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) next(err);
    res.send(`${user} is deleted`);
  });
});
app.use((err, req, res, next) => {
  res.status(500).send(err);
});
app.listen(4000, () => {
  console.log('server connected to the port 3000');
});
