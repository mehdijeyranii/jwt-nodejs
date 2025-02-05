const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  // Mock user
  const user = { id: 1, username: "john" };

  // Create a token
  const token = jwt.sign({ user }, "your-secret-key", { expiresIn: "1h" });
  res.json({ token });
});

app.get("/protected", (req, res) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verified = jwt.verify(token, "your-secret-key");
    req.user = verified;
    res.send("Protected Route");
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
