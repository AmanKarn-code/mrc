const express = require("express");
const adminControl = require("../Controller/admin-controller");
const router = express.Router();

router.route("/users").get(adminControl.allUser);       // Route to fetch users
router.route("/contacts").get(adminControl.allMessage); // Route to fetch messages
router.delete("/users/:id", adminControl.deleteUserById);
router.get("/users/user/:id", adminControl.getUserById);

module.exports = router;
