const fruitModel = require("../models/fruit.model");

function getAllAvailableFruits(req, res) {
  fruitModel
    .find({ eatenStatus: false })
    .then((fruits) => {
      const response = fruits.map(({ name, size }) => ({ name, size }));
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getTodayFruitCount(req, res) {
  fruitModel
    .find({ eatenStatus: true })
    .then((fruits) => {
      const response = fruits.filter(({ eatenDate }) =>
        isToday(eatenDate)
      ).length;
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
}

function createNewFruits(req, res) {
  fruitModel
    .insertMany(req.body.fruits)
    .then((fruits) => {
      res.json(fruits);
    })
    .catch((err) => {
      res.json(err);
    });
}

function updateOneFruit(req, res) {
  fruitModel
    .findByIdAndUpdate(req.params.fruitId, req.body, { new: true })
    .then((fruit) => {
      res.json(fruit);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deleteOneFruit(req, res) {
  fruitModel
    .findByIdAndDelete(req.params.fruitId)
    .then((fruit) => {
      res.json(fruit);
    })
    .catch((err) => {
      res.json(err);
    });
}

function isToday(date) {
  if (!date) return false;

  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

module.exports = {
  getAllAvailableFruits,
  getTodayFruitCount,
  createNewFruits,
  updateOneFruit,
  deleteOneFruit,
};
