require("dotenv").config();

const app = require("./server");

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URL,
  {
    dbName: process.env.MONGO_DB || "test",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.info("Connected to MongoDB");
  }
);

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(">".repeat(40));
  console.info("Happy Belly API");
  console.info("PORT:", process.env.PORT);
  console.info(">".repeat(40) + "\n");
});
