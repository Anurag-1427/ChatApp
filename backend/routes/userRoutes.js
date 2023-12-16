const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

// Register route
router.route("/").post(registerUser).get(allUsers);

// Login route
router.post("/login", authUser);

module.exports = router;
