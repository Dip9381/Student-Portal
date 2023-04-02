const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let details = new Schema({
    "reg_no": "string",
    "pin": "string",
    "name": "string",
    "dob": "string",
    "gender": "string",
    "bloodGroup": "string",
    "mobile": "string",
    "Nationality": "string",
    "Email": "string",
    "program": "string"
});

module.exports = mongoose.model("details", details);