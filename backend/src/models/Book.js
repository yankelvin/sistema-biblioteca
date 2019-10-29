const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    publisher: String,
    yearPublication: String,
    area: String,
    purchaseDate: String,
    pricePaid: String
  }, { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
