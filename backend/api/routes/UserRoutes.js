const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../../models/UserModel"); // Still your model name, can be renamed if needed

const router = express.Router();

// Register New User
router.post("/register", async (req, res) => {
    try {
        const { USER_ID, Password, Weight, Height } = req.body;

        if (!USER_ID || !Password || !Weight || !Height) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ USER_ID });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const newUser = new User({
            USER_ID,
            Password,
            Weight,
            Height
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully", USER_ID });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Server error during registration" });
    }
});

// Login Existing User
router.post("/login", async (req, res) => {
    try {
        const { USER_ID, Password } = req.body;

        if (!USER_ID || !Password) {
            return res.status(400).json({ error: "USER_ID and Password are required" });
        }

        const user = await User.findOne({ USER_ID });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful", USER_ID });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Server error during login" });
    }
});

// Get All User Weight Entries
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.json({ message: "No users in database" });
        }

        res.json(users);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error fetching data" });
    }
});

// Add New Weight Entry (Post-Registration Update)
router.post("/", async (req, res) => {
    try {
        const { USER_ID, Weight, Height } = req.body;

        if (!USER_ID || !Weight || !Height) {
            return res.status(400).json({ error: "USER_ID, Weight, and Height are required" });
        }

        const newEntry = new User({
            USER_ID,
            Weight,
            Height,
            Timestamp: new Date()
        });

        await newEntry.save();
        res.status(201).json({ message: "Weight entry saved", newEntry });
    } catch (error) {
        console.error("Error saving weight entry:", error);
        res.status(500).json({ error: "Server error while saving weight entry" });
    }
});

module.exports = router;
