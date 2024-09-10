const express = require("express");
const { home, register, login } = require("../Controller/auth-Controller");
const contactForm = require("../Controller/contact-Controller");
const services = require("../Controller/services-Controller");

const router = express.Router();

router.route("/").get(home);
router.route("/services").get(services);
router.route("/signup").post(register);
router.route("/signin").post(login);
router.route("/form/contact").post(contactForm);



module.exports = router;