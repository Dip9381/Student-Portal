const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  name: {
    type: String
  },
  pin: {
    type: String
  }
});

module.exports = mongoose.model("detail", detail);