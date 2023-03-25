const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let attendance = new Schema({
  Subject:{
    type: String
  },
  reg_no:{
    type: Object
  }
  // reg_no: {
  //   type: String
  // },
  // attendance: {
  //   type: Object
  // }
});

module.exports = mongoose.model("attendance", attendance);