const Book = require("../models/Book");
const Ajv = require("ajv");

module.exports = {
  async store(req, res) {
    const ajv = new Ajv({ allErrors: true });

    var schema = {
      properties: {
        name: { type: "string", maxLength: 50, minLength: 5 },
        author: { type: "string", maxLength: 50, minLength: 5 },
        publisher: { type: "string", maxLength: 50, minLength: 5 },
        yearPublication: { type: "number" },
        area: { type: "string", maxLength: 20, minLength: 5 },
        purchaseDate: { type: "number" },
        pricePaid: { type: "number" }
      }
    };

    var validate = ajv.compile(schema);

    if (!validate(req.body)) {
      return res.json({
        400: `O pedido não pôde ser entregue devido à sintaxe incorreta. ${ajv.errorsText(
          validate.errors
        )}`
      });
    }

    const bookExists = await Book.findOne({ where: { name: req.body.name } });

    if (bookExists) {
      return res.status(400).json({ 400: `${req.body.name} already exists` });
    }

    const book = await Book.create(req.body);

    return res.json({ book });
  },
  async index(req, res) {
    const books = await Book.find().sort("-createdAt");
    return res.json(books);
  },
  async update(req, res) {
    const query = { _id: req.body._id };
    const { name, author, publisher, yearPublication, area, purchaseDate, pricePaid } = req.body;
    const book = await Book.updateOne(
      query,
      {
        name,
        author,
        publisher,
        yearPublication,
        area,
        purchaseDate,
        pricePaid
      },
      { omitUndefined: true }
    );
    return res.json({ book });
  },
  async delete(req, res) {
    const query = { _id: req.body._id };
    const book = await Book.deleteOne(query);
    return res.json({ book });
  },
  async findBook(req, res) {
    const query = { name: req.body.name };
    const book = await Book.find(query);
    return res.json({ book });
  },
  async findAuthor(req, res) {
    const query = { author: req.body.author };
    const books = await Book.find(query);
    return res.json({ books });
  }
};
