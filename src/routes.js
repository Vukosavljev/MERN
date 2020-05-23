const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/", (req, res) => {
  console.log(PORT);
  res.send("1321313   13213");
});

routes.post("/register", UserController.store);

module.exports = routes;
