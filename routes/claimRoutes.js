// Import required modules
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

// Route to claim random points for a specific user
// POST /api/claim
router.post("/", async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    const points = Math.floor(Math.random() * 10) + 1;

    user.points += points;
    await user.save();

    const history = new ClaimHistory({
      userId: user._id,
      points,
    });
    await history.save();

    res.status(200).json({
      message: `Awarded ${points} points to ${user.username}`,
      user,
      points,
    });
  } catch (err) {
    console.error("Error claiming points:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});


// Route to get all point-claim history
router.get("/history", async (req, res) => {
  try {
    // Fetch all claim logs and populate the related user's name and ID
    const history = await ClaimHistory.find()
      .populate("userId", "username userId") // Populate specific user fields
      .sort({ timestamp: -1 }); // Most recent first

    // Send claim history list
    res.status(200).json(history);
  } catch (err) {
    console.error("Error fetching history:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
