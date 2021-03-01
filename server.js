const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

//routes
const messagesRouter = require("./routes/messages.router");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//socket (need http server to be created)
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("new client connected");
  /*
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => testEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
   */
});

const testEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

//routes

app.use("/messages", messagesRouter);

app.get("/", (req, res) => {
  res.send("Realtime-Chat API v1.0");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server now listening in port ${PORT}`);
});
