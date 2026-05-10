const Service = require("../models/Service");

exports.addService = async (req, res) => {
  try {

    const { title, description, price, category } = req.body;

    const service = await Service.create({
      title,
      description,
      price,
      category,
      merchant: req.user.id
    });

    res.status(201).json({
      message: "Service added successfully",
      service
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getServices = async (req, res) => {

  try {

    const services = await Service.find();

    res.json(services);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};