const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  ProjectName: {
    type: String,
    required: true,
  },
  ProjectStartDate: {
    type: Date,
    required: true,
  },
  ProjectEndDate: {
    type: Date,
    required: false,
  },
  ProjectMangerName: {
    type: String,
    required: true
  },
  ProjectMangerEmail: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Project", projectSchema);
