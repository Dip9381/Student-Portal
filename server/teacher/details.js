const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let details = new Schema({
    "teacher_id": "string",
    "pin": "string",
    "name":"string"
});

module.exports = mongoose.model("details", details);