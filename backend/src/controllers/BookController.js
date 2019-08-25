const Book = require("../models/Book");

module.exports = {
  async store(req, res) {
    const { name, author, publisher, yearPublication, area, purchaseDate, pricePaid } = req.body;
    const book = await Book.create({
      name,
      author,
      publisher,
      yearPublication,
      area,
      purchaseDate,
      pricePaid
    });
    return res.json({ book });
  },
  async index(req, res) {
    const books = await Book.find().sort("-createdAt");
    return res.json(books);
  },
  async update(req, res) {
    const query = { _id: req.body._id };
    const { name, author, publisher, yearPublication, area, purchaseDate, pricePaid } = req.body;
    const book = await Book.updateOne(query, {
      name,
      author,
      publisher,
      yearPublication,
      area,
      purchaseDate,
      pricePaid
    }, { omitUndefined: true });
    return res.json({ book });
  }
  ,
  async delete(req, res) {
    const query = { _id: req.body._id };
    const book = await Book.deleteOne(query);
    return res.json({ book });
  }
};
