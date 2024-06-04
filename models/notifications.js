const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notisSchema = new Schema(
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
    ]
  },
  { timestamps: true }
);

const Notifications = mongoose.model("Notifications", notisSchema);

module.exports = Notifications;
