require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const MONGO_URI = "mongodb+srv://laithmasri:E3hrMlrtE49wiWv5@cluster0.fzv6v.mongodb.net/Weight?retryWrites=true&w=majority";
// MongoDB connection string (pls dont lose it)

const weightRoutes = require("./routes/weightRoutes");
app.use("/api/weights", weightRoutes);

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Middleware
app.use(express.json());
app.use(cors());

// Default Route / will chang esoon
app.get("/", (req, res) => {
    res.send("🚀 Backend is running!");
});

// Starts the Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
