const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();
connectDB();

app.use(express.json()); // to accept JSON data

app.get("/", (req, res) => {
  res.send("API is running successfully");
});
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });
// app.get("/api/chat/:id", (req, res) => {
//   console.log(req);
//   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`.yellow.bold));
