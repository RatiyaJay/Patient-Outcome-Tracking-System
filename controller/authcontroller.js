const bcrypt = require("bcrypt");
const users = require("../model/user");

exports.signup = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await users.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const User = new users({
      username,
      password: hashedPassword,
      email,
    });
    await User.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.loging = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
