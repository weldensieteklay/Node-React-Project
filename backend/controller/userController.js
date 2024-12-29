const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

//Sign up
exports.signUp = async (req, res, next) => {
  const { first_name, last_name, email, password, phone, role } = req.body;
  console.log(req.body, " hii");

  if (!first_name || !last_name || !email || !phone || !password || !role) {
    return res.status(400).json({ errors: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
      phone,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//User logn in
exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body, "hii");

  // Find user by email
  const user = await User.findOne({ email, password });
  if (!user) {
    res.status(401).json({ message: "invalid credentials" });
  }

  // Create JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    success: true,
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
