const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const uploadConfig = require("./config/upload");

// Controllers
const BookController = require("./controllers/BookController");
const EmployeeController = require("./controllers/EmployeeController");

const routes = new express.Router();
const upload = multer(uploadConfig);

// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Book Methods
routes.get("/api/books", jsonParser, BookController.index);
routes.post("/api/new/book", upload.single('image'), BookController.store);
routes.put("/api/update/book", jsonParser, BookController.update);
routes.delete("/api/delete/book", jsonParser, BookController.delete);

// Employee Methods
routes.get("/api/employees", jsonParser, EmployeeController.index);
routes.post("/api/new/employee", jsonParser, EmployeeController.store);
routes.put("/api/update/employee", jsonParser, EmployeeController.update);
routes.delete("/api/delete/employee", jsonParser, EmployeeController.delete);

module.exports = routes;
