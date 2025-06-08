const bcrypt = require("bcrypt");
const User = require("./models/User"); // Adjust path if needed

app.post('/api/auth/login', async (req, res) => {
  const { USER_ID, Password } = req.body;

  try {
    const user = await User.findOne({ USER_ID });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.status(200).json({
      message: "Login successful",
      user: {
        USER_ID: user.USER_ID,
        Weight: user.Weight,
        Height: user.Height,
        BMI: user.BMI,
        Timestamp: user.Timestamp
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
