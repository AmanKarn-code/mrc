const Service = require("../Models/services-model");

const services = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({msg:services});  // Ensure this is returning JSON
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch services" });  // Return JSON on error too
  }
};

module.exports = services;
