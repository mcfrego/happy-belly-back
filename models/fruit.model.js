const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fruit name is required"],
  },
  size: {
    type: String,
    required: [true, "Fruit size is required"],
    enum: ["small", "medium", "big"],
  },
  eatenStatus: {
    type: Boolean,
    default: false,
  },
  eatenDate: {
    type: Date,
  },
});

const fruitModel = mongoose.model("fruit", fruitSchema);
module.exports = fruitModel;
