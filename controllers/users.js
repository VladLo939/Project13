const User = require('../models/user');

// eslint-disable-next-line no-unused-vars
module.exports.getUser = (req, res) => {
  User.find({})
    .then((users) => res.json({ data: users }))
    .catch((err) => res.status(500).json({ message: err.message }));
};

module.exports.getUserId = (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  User.findById((req.params._id))
    .then((user) => res.status(200).json({ data: user }))
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.json({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
