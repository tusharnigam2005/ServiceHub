const express = require("express");

const {
  addService,
  getServices
} = require("../controllers/serviceController");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/add",
  authMiddleware,
  roleMiddleware("merchant"),
  addService
);

module.exports = router;
router.get("/", getServices);