const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://laithmasri:123@cluster0.fzv6v.mongodb.net/User_Info?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB Atlas Connected");
  })
  .catch(err => {
    console.error("MongoDB Connection Error:", err);
  });

// Define Schema
const weightSchema = new mongoose.Schema({
  ID: String,        // User ID
  Weight: Number,    // Weight in grams
  Height: Number,    // Height in cm
  BMI: Number,       // BMI
  TimeStamp: { type: Date, default: Date.now } // Timestamp
});

// Create Model using 'User_Info' collection
const WeightEntry = mongoose.model("User_Info", weightSchema);

// GET: Fetch Weight Data by User ID
app.get('/api/weights/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const weights = await WeightEntry.find({ ID: id });

    if (weights.length === 0) {
      return res.status(404).json({ message: "No weights found in database." });
    }

    res.json(weights);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST: Add New Weight Entry
 app.post('/api/user', async (req, res) => {
  try {
    const { ID, Weight, Height } = req.body;

    if (!ID || !Weight || !Height) {
      return res.status(400).json({ message: "ID, Weight, and Height are required." });
    }

    const heightInMeters = Height / 100;
    const BMI = (Weight / 1000) / (heightInMeters * heightInMeters);

    const newEntry = new WeightEntry({
      ID,
      Weight,
      Height,
      BMI
    });

    await newEntry.save();
    res.status(201).json({ message: "Weight entry added successfully", data: newEntry });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
