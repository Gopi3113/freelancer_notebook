// Load environment variables first
import 'dotenv/config';

import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // <-- import cors

import projectRoutes from "./routes/projectRoutes.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS so frontend can access backend
app.use(cors());

// Routes
app.use("/api/projects", projectRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Check if MONGO_URI is loaded
console.log("MONGO_URI =", process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
