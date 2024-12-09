const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");  // Import the controller

// Define the route for user registration
router.post("/register", registerUser);

module.exports = router;
