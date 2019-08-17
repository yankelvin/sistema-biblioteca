const Book = require("../models/Book");

module.exports = {
  async store(req, res) {
    const { author, title, subtitle, preface } = req.body;
    const book = await Book.create({
      author,
      title,
      subtitle,
      preface
    });
    return res.json({ book });
  },
  async index(req, res) {
    const books = await Book.find().sort("-createdAt");
    return res.json(books);
  }
};
