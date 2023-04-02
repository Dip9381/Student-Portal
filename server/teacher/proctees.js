const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let proctees = new Schema({
        "teacher_id": "string",
        "proctee": [
          {
            "id": "string"
          }
        ]
});

module.exports = mongoose.model("proctees", proctees);