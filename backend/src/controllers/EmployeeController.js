const Employee = require("../models/Employee");
const Ajv = require("ajv");

module.exports = {
  async store(req, res) {
    const ajv = new Ajv({ allErrors: true });

    var employeeSchema = {
      properties: {
        name: { type: "string", maxLength: 50, minLength: 5 },
        oabNumber: { type: "number", min: 1 }
      }
    };

    var validate = ajv.compile(employeeSchema);

    if (!validate(req.body)) {
      return res.json({
        400: `${validate.errors}`
      });
    }
    const employeeAlreadyExists = await Employee.findOne({ oabNumber: req.body.oabNumber });

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
    const query = { _id: req.body._id };
    const { name, oabNumber } = req.body;
    const employee = await Employee.updateOne(
      query,
      {
        name,
        oabNumber
      },
      { omitUndefined: true }
    );
    return res.json({ employee });
  },
  async delete(req, res) {
    const query = { _id: req.body._id };
    const employee = await Employee.deleteOne(query);
    return res.json({ employee });
  }
};
