const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema(
  {
    driverEmail: {
      type: String,
      required: true,
    },
    Names: [
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
    ],
    comment: [
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
    ],
    rate: [
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
