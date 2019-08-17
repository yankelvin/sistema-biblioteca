const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const uploadConfig = require("./config/upload");
const BookController = require("./controllers/BookController");

const routes = new express.Router();
const upload = multer(uploadConfig);

// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

routes.get("/api/books", jsonParser, BookController.index);
routes.post("/api/new/book", jsonParser, BookController.store);

module.exports = routes;
