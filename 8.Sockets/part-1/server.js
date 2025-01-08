import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
dotenv.config();
const app = express();
const server = http.createServer(app);
//initiate socket.io and attach this to the http server
const io = new Server(server);
app.use(express.static("public"));
const users = new Set();
io.on("connection", (socket) => {
  console.log("A user is now connected");
  //handle users when they will join the chat
  socket.on("join", (userName) => {
    users.add(userName);
    socket.userName = userName;
    //broadcast to all clients that a new user has joined
    io.emit("userJoined", userName);
    //send the updated user list to all clients
    io.emit("userList", Array.from(users));
  });
  //handle incoming chat
  socket.on("chatMessage", ({ userName, messageText }) => {
    //broadcastthe recievied message
    io.emit("chatMessage", { userName, messageText });
  });
  //handle user disconnected
  socket.on("disconnect", () => {
    console.log("user is disconnected");
    users.forEach((user) => {
      if (user == socket.userName) {
        users.delete(user);
        io.emit("userLeft", user);
        io.emit("userList", Array.from(users));
      }
    });
  });
});
server.listen(process.env.PORT, () => {
  console.log("server is listening...");
});
