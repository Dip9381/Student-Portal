const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let reciepts = new Schema({
    "reg_no":"string",
   "reciepts": {
        "type": "array",
        "items": {
          "type": "object",
            "receipt_number": {
              "type": "string"
            },
            "payment_for": {
              "type": "string"
            },
            "number": {
              "type": "string"
            },
            "amount_to_be_paid": {
              "type": "number"
            },
            "amount_in_words": {
              "type": "string"
            }
        }
      }
      
});

module.exports = mongoose.model("reciepts", reciepts);