const router = require("express").Router();

const fruitRouter = require("./fruit.router");
const authRouter = require("./auth.router");

router.use("/fruit", fruitRouter);
router.use("/auth", authRouter);

router.get("/", function (req, res) {
  res.json("Your belly is alive and happy!");
});

module.exports = router;
