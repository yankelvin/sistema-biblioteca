const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    author: String,
    title: String,
    subtitle: String,
    preface: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Book", BookSchema);
