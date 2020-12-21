const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const notFound = require('./routes/notFound');
const auth = require('./middleware/auth');

app.use(auth);

app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use(notFound);

app.listen(PORT, () => {
});
