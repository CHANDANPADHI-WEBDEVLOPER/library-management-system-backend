const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');



// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();


// Middleware to parse JSON requests
app.use(express.json());

// Use auth routes
app.use("/api/auth", require("./controllers/authController"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
