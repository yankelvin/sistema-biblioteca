const Employee = require("../models/Employee");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
const Ajv = require("ajv");

module.exports = {
  async store(req, res) {
    const ajv = new Ajv({ allErrors: true });

    console.log(req.body);

    const employeeAlreadyExists = await Employee.findOne({ email: req.body.email });

    if (employeeAlreadyExists) {
      return res.status(400).json({ error: `${req.body.oabNumber} already exist` });
    }

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
    const books = await Book.find().sort("-createdAt");
    return res.json({ 200: books });
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
  }
};
