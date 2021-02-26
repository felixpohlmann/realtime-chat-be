const express = require("express");
const cors = require("cors");

//routes
const messagesRouter = require("./routes/messages.router");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//routes

app.use("/messages", messagesRouter);

app.get("/", (req, res) => {
  res.send("Realtime-Chat API v1.0");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server now listening in port ${PORT}`);
});
