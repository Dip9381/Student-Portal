const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let details = new Schema({
  name: {
    type: String
  },
  pin: {
    type: String
  }
});

module.exports = mongoose.model("details", details);