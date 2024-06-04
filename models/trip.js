const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    depart: {
      type: String,
      default: "",
    },
    depart0: {
      type: String,
      default: " ",
    },
    arrivee: {
      type: String,
      default: "",
    },
    arrivee0: {
      type: String,
      default: "",
    },
    dateData: {
      type: String,
      default: Date.now,
    },
    time: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    places: {
      type: Number,
      default: 0,
    },
    available_places: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    driver: {
      email: {
        type: String,
        default: "",
      },
      name: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
      rate: {
        type: Number,
        default: 0,
      },
    },
    passenger: [
      {
        type: String,
      },{
        type: String,
      },{
        type: String,
      },{
        type: String,
      },{
        type: String,
      }
    ]
  },
  { timestamps: true }
);

const trip = mongoose.models.trip || mongoose.model("trip", Schema);

module.exports = trip;
