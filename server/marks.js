const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let marks = new Schema({
        "type": "object",
          "student_id": {
            "type": "string"
          },
          "class_number": {
            "type": "string"
          },
          "courses": {
            "type": "array",
            "items": {
              "type": "object",
                "course_code": {
                  "type": "string"
                },
                "course_title": {
                  "type": "string"
                },
                "course_type": {
                  "type": "string"
                },
                "course_system": {
                  "type": "string"
                },
                "faculty": {
                  "type": "string"
                },
                "slot": {
                  "type": "string"
                },
                "details": {
                  "type": "array",
                  "items": {
                    "type": "object",
                      "serial_no": {
                        "type": "integer"
                      },
                      "mark_title": {
                        "type": "string"
                      },
                      "max_mark": {
                        "type": "integer"
                      },
                      "status": {
                        "type": "string"
                      },
                      "scored_mark": {
                        "type": "integer"
                      },
                      "remarks": {
                        "type": "string"
                      }
                  }
                }
            }
          }
      
});

module.exports = mongoose.model("marks", marks);