/* eslint-disable no-underscore-dangle */
const Cards = require('../models/card');

// eslint-disable-next-line no-unused-vars
module.exports.getCards = (req, res) => {
  Cards.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Cards.create({ name, link, owner: req.user._id })
    .then((cards) => res.json({ data: cards }))
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
};

module.exports.deleteCard = (req, res) => {
  Cards.findByIdAndRemove(req.params._id)
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
