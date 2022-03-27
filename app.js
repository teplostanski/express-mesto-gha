const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.error('Unable to connect to mongodb', err);
  } else {
    console.log('Successfully connected to mongodb');
  }
});

app.use((req, res, next) => {
  req.user = {
    _id: '6240d12a8587e3cac5897b3f',
  };
  next();
});

app.use('/users', require('./routes/user'));
app.use('/cards', require('./routes/card'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
