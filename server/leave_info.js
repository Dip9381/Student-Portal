const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let leave_infos = new Schema({
  reg_no:{
    type: String
  },
  Name:{
    type: String
  },
  start_date: {
    type: String
  },
  end_date: {
    type: String
  },
  reason: {
    type: String
  },
  reason_Desp: {
    type: String
  }
});

module.exports = mongoose.model("leave_infos", leave_infos);