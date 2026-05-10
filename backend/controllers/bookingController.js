const Booking = require("../models/Booking");

// Book a service
exports.bookService = async (req, res) => {
  try {
    const { serviceId } = req.body;

    const booking = await Booking.create({
      customer: req.user.id,
      service: serviceId
    });

    res.status(201).json({
      message: "Service booked successfully",
      booking
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Get bookings of logged-in customer
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      customer: req.user.id
    }).populate("service");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};