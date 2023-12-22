const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Register route
router.route("/").post(registerUser).get(protect, allUsers);

// Login route
router.post("/login", authUser);

module.exports = router;
