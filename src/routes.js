const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/status", (req, res) => {
  res.send({ status: 200 });
});

routes.post("/register", UserController.add);
routes.get("/register/:userId", UserController.getById);

module.exports = routes;
