import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello world");
});
io.on("connection", (socket) => {
  console.log("user connected");
  console.log("ID", socket.id);
  socket.emit("welcome", "Welcome to the server");
  socket.broadcast.emit("welcome", `${socket.id} connected`);
  socket.on("message", (message,rec) => {
    io.to(rec).emit("message", message);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(8080, () => {
  console.log("server is listening...");
});
