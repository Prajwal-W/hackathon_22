const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  TeamName: {
    type: String,
    required: true,
  },
  TeamStartDate: {
    type: Date,
    required: true,
  },
  TeamEndDate: {
    type: Date,
    required: false,
  },
  TeamLeadName: {
    type: String,
    required: true,
  },
  TeamLeadEmail: {
    type: String,
    required: true,
  },
  TeamMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Team", teamSchema);
