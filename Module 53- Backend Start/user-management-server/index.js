const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Server is available");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Lubana", email: "sabana@gmail.com" },
  { id: 3, name: "Tilbana", email: "sabana@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

//Save to the database
app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`User Server Started on Port ${port}`);
});
