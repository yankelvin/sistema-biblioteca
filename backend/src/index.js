const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
//const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://admin:admin135@sisbiblioteca-8oeen.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//app.use((req, res, next) => {
//  req.io = io;
//  next();
//});

app.use(cors());

app.use("/api/files", express.static(path.resolve(__dirname, "..", "uploads", "resized")));

app.use(require("./routes"));

app.listen(3333);
