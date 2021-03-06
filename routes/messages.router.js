const express = require("express");
const Router = express.Router();

//controllers
const messagesController = require("../controllers/messages.controller");

Router.get("/", (req, res) => {
  messagesController.getMessages(req, res);
});

Router.post("/", (req, res) => {
  messagesController.storeMessage(req, res);
  req.app.io.sockets.emit("newMessage", "new message emit");
});

module.exports = Router;
