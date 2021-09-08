const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: true,
    validate: [
      (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
      "Email format is not valid",
    ],
  },
  password: {
    type: String,
    required: [true, "User password is required"],
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
