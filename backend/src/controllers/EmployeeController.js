const Employee = require("../models/Employee");
const Book = require("../models/Book");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
const Ajv = require("ajv");

module.exports = {
  async store(req, res) {
    console.log(req.body);

    const employee = await Employee.create(req.body);

    return res.json({ employee });
  },
  async index(req, res) {
    if (req.body) {
      try {
        const employees = await Employee.find(req.body);
        if (employees.length) {
          return res.json(employees);
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
    const employees = await Employee.find().sort("-createdAt");
    return res.json({ 200: employees });
  },
  async update(req, res) {
    const employee = await Employee.findByIdAndUpdate(req.body._id, req.body);
    if (!employee) {
      return res.json({ 404: `${req.body._id} not found` });
    }
    return res.json({ 200: employee });
  },
  async delete(req, res) {
    if (req.body._id) {
      const employee = await Employee.findByIdAndDelete(Object(req.body._id), err => {
        if (err) {
          return res.json({ 500: err });
        }
      });
      return res.json({ 200: `${employee}` });
    }
  },
  async reserveBook(req, res) {
    if (req.body.book_Id && req.body.emp_Id) {
      const book = await Book.findOne({ _id: req.body.book_Id });
      const employee = await Employee.findOne({ _id: req.body.emp_Id });

      let find = false;
      employee.reservedBooks.forEach(b => (b._id === book._id ? (find = true) : null));

      if (!find) {
        employee.reservedBooks.push(book);
        employee.save();
        return res.json({ 200: `${book.name}` });
      }

      return res.json({ 404: `${req.body.book_Id} or ${req.body.emp_Id} not found` });
    }
  }
};
