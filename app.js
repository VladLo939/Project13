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

app.use((req, res, next) => {
  req.user = {
    _id: '5fd9ff7fb18fe44c982bfbe6', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
});

app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use((req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT, () => {
});