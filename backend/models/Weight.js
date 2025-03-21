const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema({
    USER_ID: String,
    Weight: Number,
    WeightUnit: String, // kg, lb, g, stone
    Timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Weight", weightSchema);
