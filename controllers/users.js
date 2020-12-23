const User = require('../models/user');

module.exports.getUser = (req, res) => {
  User.find({})
    .then((users) => res.json({ data: users }))
    .catch((err) => res.status(500).json({ message: err.message }));
};

module.exports.getUserId = (req, res) => {
  User.findById((req.params.id))
    .orFail(new Error('NotValidId'))
    .then((user) => res.status(200).json({ data: user }))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        res.status(404).json({ message: 'Пользователь не найден' });
      } else {
        res.status(500).json({ message: 'Ошибка' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.json({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Ошибка' });
      }
    });
};
