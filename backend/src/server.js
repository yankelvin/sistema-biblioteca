const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dataBooks = require("../src/dataBooks");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/books", (req, res) => {
  res.send(dataBooks.getBooks());
});

app.get("/books/:id", (req, res) => {
  res.send(dataBooks.getBook(req.params.id));
});

app.post("/books", (req, res) => {
  const book = dataBooks.saveBook({
    nome: req.body.nome,
    autores: req.body.autores,
    editora: req.body.editora,
    anoPublicacao: req.body.anoPublicacao,
    area: req.body.area
  });
  res.send(book);
});

app.put("/books/:id", (req, res) => {
  const book = dataBooks.saveBook({
    nome: req.body.nome,
    autores: req.body.autores,
    editora: req.body.editora,
    anoPublicacao: req.body.anoPublicacao,
    area: req.body.area,
    id: req.params.id
  });
  res.send(book);
});

app.delete("/books/:id", (req, res) => {
  res.send(dataBooks.deleteBook(req.params.id));
});

app.listen(porta, () => {
  console.log("Servidor executando...");
});
