const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },

  bookingDate: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);