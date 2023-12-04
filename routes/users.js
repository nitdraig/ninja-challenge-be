const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const userSchema = require("../models/userModel");

let users = [];

router.get("/getusers", (req, res) => {
  res.json({ users });
});

router.post("/createUsers", (req, res) => {
  const newUser = {
    ...userSchema,
    id: uuidv4(),
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json({ user: newUser });
});

router.put("/updateUsersById/:userId", (req, res) => {
  const userId = req.params.userId;
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    const existingUser = users[index];
    const updatedUser = {
      ...existingUser,
      ...req.body,
      id: userId,
    };

    users[index] = updatedUser;
    res.status(200).json({ user: updatedUser });
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

router.delete("/deleteUsersById/:userId", (req, res) => {
  const userId = req.params.userId;

  users = users.filter((user) => user.id !== userId);

  res.json({ message: "Usuario eliminado exitosamente" });
});

module.exports = router;
