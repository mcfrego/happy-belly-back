const jwt = require("jsonwebtoken");
const fruitRouter = require("express").Router();

const TEST = "test";

const {
  getAllAvailableFruits,
  getTodayFruitCount,
  createNewFruits,
  updateOneFruit,
  deleteOneFruit,
} = require("../controllers/fruit.controller");

fruitRouter.get("/", getAllAvailableFruits);
fruitRouter.get("/me", auth, getTodayFruitCount);
fruitRouter.post("/me", auth, createNewFruits);
fruitRouter.put("/me/:fruitId", auth, updateOneFruit);
fruitRouter.delete("/me/:fruitId", auth, deleteOneFruit);

function auth(req, res, next) {
  if (process.env.NODE_ENV === TEST) next();
  else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, insideToken) => {
      if (err) res.json("Token not valid");
      res.locals.id = insideToken.id;
      next();
    });
  }
}

module.exports = fruitRouter;
