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

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
