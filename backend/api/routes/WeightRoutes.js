const express = require("express");
const bcrypt = require("bcrypt");
const Weight = require("../../models/UserModel");

const router = express.Router();

// 📌 Register User
router.post("/register", async (req, res) => {
    try {
        const { USER_ID, Password, Weight, Height } = req.body;

        if (!USER_ID || !Password || !Weight || !Height) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newUser = new Weight({
            USER_ID,
            Password, // Hashed automatically
            Weight,
            Height
        });

        await newUser.save();
        res.status(201).json({ message: "✅ User registered successfully", USER_ID });
    } catch (error) {
        console.error("❌ Error registering user:", error);
        res.status(500).json({ error: "Server error during registration" });
    }
});

// 📌 Login User
router.post("/login", async (req, res) => {
    try {
        const { USER_ID, Password } = req.body;

        if (!USER_ID || !Password) {
            return res.status(400).json({ error: "USER_ID and Password are required" });
        }

        const user = await Weight.findOne({ USER_ID });

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "✅ Login successful", USER_ID });
    } catch (error) {
        console.error("❌ Error logging in:", error);
        res.status(500).json({ error: "Server error during login" });
    }
});

// 📌 Get All Weights (If No Data, Return a Message)
router.get("/", async (req, res) => {
    try {
        const weights = await Weight.find();

        if (weights.length === 0) {
            return res.json({ message: "No weights in database" });
        }

        res.json(weights);
    } catch (error) {
        console.error("❌ Error fetching data:", error);
        res.status(500).json({ error: "Error fetching weight data" });
    }
});

// 📌 Add New Weight Entry
router.post("/", async (req, res) => {
    try {
        const { USER_ID, Weight, Height } = req.body;

        if (!USER_ID || !Weight || !Height) {
            return res.status(400).json({ error: "USER_ID, Weight, and Height are required" });
        }

        const newEntry = new Weight({
            USER_ID,
            Weight,
            Height,
            Timestamp: new Date()
        });

        await newEntry.save();
        res.status(201).json({ message: "✅ Weight entry saved", newEntry });
    } catch (error) {
        console.error("❌ Error saving weight entry:", error);
        res.status(500).json({ error: "Server error while saving weight entry" });
    }
});

module.exports = router;
