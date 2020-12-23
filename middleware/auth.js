/* eslint-disable linebreak-style */
const auth = (req, res, next) => {
  req.user = {
    _id: '5fd9ff7fb18fe44c982bfbe6', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
};

module.exports = auth;
