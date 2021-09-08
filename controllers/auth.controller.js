const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function signup(req, res) {
  const hashed_pwd = bcrypt.hashSync(req.body.password, 10);

  const hashed_body = {
    name: req.body.name,
    email: req.body.email,
    password: hashed_pwd,
  };

  userModel
    .create(hashed_body)
    .then((user) => {
      const insideToken = {
        name: user.name,
        id: user._id,
        email: user.email,
      };

      const token = jwt.sign(insideToken, process.env.SECRET);

      const resUser = {
        name: user.name,
        email: user.email,
        token: token,
      };

      res.json(resUser);
    })
    .catch((err) => {
      res.json(err);
    });
}

function login(req, res) {
  userModel
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user) res.json("Wrong email");

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) res.json("Wrong password");

        const insideToken = {
          name: user.name,
          email: user.email,
          id: user._id,
        };
        const token = jwt.sign(insideToken, process.env.SECRET);

        resUser = {
          name: user.name,
          email: user.email,
          token: token,
        };

        res.json(resUser);
      });
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  signup,
  login,
};
