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
        purchaseDate: { type: "number", min: 0 },
        pricePaid: { type: "number", min: 0 }
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

    const bookExists = await Book.findOne({ name: req.body.name });
    if (bookExists) {
      return res.status(400).json({ error: `${req.body.name} already exists` });
    }

    const book = await Book.create(req.body);

    return res.json({ book });
  },
  async index(req, res) {
    if (req.body) {
      const books = await Book.find(req.body);

      try {
        const books = await Book.find(req.body);
        if (books.length) {
          return res.json(books);
        } else {
          return res
            .status(404)
            .json({ "Requisição inválida": `${JSON.stringify(req.body)} not found` });
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        //return res.json({ 400: `Requisição invalida ${req.body}` });
      }
    }
    const books = await Book.find().sort("-createdAt");
    return res.json({ 200: books });
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
    if (req.body._id) {
      return res.json({ 200: await Book.findByIdAndDelete(req.body._id) });
    }
    return res.json({ 400: "id is missing" });
  }
};
