const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const weightSchema = new mongoose.Schema({
    USER_ID: { type: String, required: true, unique: true }, // User ID
    Password: { type: String, required: true }, // Hashed password
    Weight: { type: Number, required: true }, // Weight in grams
    Height: { type: Number, required: true }, // Height in cm
    BMI: { type: Number }, // Auto-calculated BMI
    Timestamp: { type: Date, default: Date.now }
});

// Hash password before saving
weightSchema.pre("save", async function (next) {
    if (this.isModified("Password")) {
        const salt = await bcrypt.genSalt(10);
        this.Password = await bcrypt.hash(this.Password, salt);
    }

    // Auto-calculate BMI
    if (this.Weight && this.Height) {
        let heightInMeters = this.Height / 100;
        this.BMI = this.Weight / (heightInMeters * heightInMeters);
    }

    next();
});

module.exports = mongoose.model("Weight", weightSchema);
