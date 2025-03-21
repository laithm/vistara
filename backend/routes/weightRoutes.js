const express = require("express");
const router = express.Router();
const Weight = require("../models/Weight");

// gets all weight records
// GET all weight records
router.get("/", async (req, res) => {
    try {
        const weights = await Weight.find();

        if (weights.length === 0) {
            return res.json({ message: "No weights in database" });
        }

        res.json(weights);
    } catch (error) {
        res.status(500).json({ error: "Error fetching weight data" });
    }
});


// posts new weight record
router.post("/", async (req, res) => {
    try {
        const { USER_ID, Weight, WeightUnit } = req.body;
        const newWeight = new Weight({
            USER_ID,
            Weight,
            WeightUnit,
            Timestamp: new Date()
        });

        await newWeight.save();
        res.status(201).json({ message: "Weight data saved", newWeight });
    } catch (error) {
        res.status(500).json({ error: "Error saving weight data" });
    }
});

module.exports = router;
