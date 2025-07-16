// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Loads .env variables

// Import custom route files
const userRoutes = require("./routes/userRoutes");
const claimRoutes = require("./routes/claimRoutes");

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());               // Enable CORS to allow frontend requests
app.use(express.json());       // Parse incoming JSON requests

// Mount routes
app.use("/api/users", userRoutes);   // Handles user-related APIs
app.use("/api/claim", claimRoutes); // Handles point claiming and history

// Connect to MongoDB 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(" Connected to MongoDB");
  
  // Start the server once DB is connected
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error(" MongoDB connection error:", err.message);
});
