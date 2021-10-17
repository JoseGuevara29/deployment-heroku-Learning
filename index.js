const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());
let userData = [
  { username: "test1", password: "test1password" },
  { username: "test2", password: "test2password" },
];
app.use("/api/users", (req, res) => {
  res.json(userData);
});
app.post("/api/register", (req, res) => {
  const newUser = req.body;
  if (!newUser.username || !mewUser.password) {
    res.status(400).json({ message: "provide a username and password" });
  }

  //   res.json({ data: "register" });
});
app.post("/api/login", (req, res) => {
  res.json({ data: "login" });
});

app.use("/api/*", (_, res) => {
  res.json({ data: "The API is working!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log(process.env.USER); //USER - MAC
console.log(process.env.PORT);
