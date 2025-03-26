const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the user schema
const userSchema = new mongoose.Schema({
    USER_ID: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Weight: {
        type: Number,
        required: true
    },
    Height: {
        type: Number,
        required: true
    },
    BMI: {
        type: Number
    },
    Timestamp: {
        type: Date,
        default: Date.now
    }
});

// Middleware to hash password before saving
userSchema.pre("save", async function (next) {
    if (this.isModified("Password")) {
        const salt = await bcrypt.genSalt(10);
        this.Password = await bcrypt.hash(this.Password, salt);
    }

    // Automatically calculate BMI
    if (this.Weight && this.Height) {
        const heightInMeters = this.Height / 100;
        this.BMI = this.Weight / (heightInMeters * heightInMeters);
    }

    next();
});

// Export the model
module.exports = mongoose.model("User", userSchema);
