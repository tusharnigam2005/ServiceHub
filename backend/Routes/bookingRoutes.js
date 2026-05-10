const express = require("express");

const {
  bookService,
  getMyBookings
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/book",
  authMiddleware,
  roleMiddleware("customer"),
  bookService
);

router.get(
  "/my-bookings",
  authMiddleware,
  roleMiddleware("customer"),
  getMyBookings
);

module.exports = router;