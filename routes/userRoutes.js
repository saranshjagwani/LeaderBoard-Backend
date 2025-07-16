// Importing necessary modules
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Importing the User model

// Route to add a new user to the database
router.post("/", async (req, res) => {
  try {
    // Extracting fields from request body
    const { username, userId, img } = req.body;

    // Validation: username and userId are required
    if (!username ) {
      return res.status(400).json({ message: "Username and userId are required." });
    }

    // Check if a user with the same userId already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User ID already exists." });
    }

    // Create new user document
    const newUser = new User({ username, userId, img });

    // Save the new user to the database
    await newUser.save();

    // Respond with success message and created user
    res.status(201).json({ message: "User added successfully.", user: newUser });

  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Route to get all users (for dropdown or leaderboard)
router.get("/", async (req, res) => {
  try {
    // Fetch all users from the database, sorted by points (highest first)
    const users = await User.find().sort({ points: -1 });

    // Send the list of users
    res.status(200).json(users);

  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;