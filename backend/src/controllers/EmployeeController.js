const Employee = require("../models/Employee");

module.exports = {
  async store(req, res) {
    const { name, oabNumber } = req.body;
    const employee = await Employee.create({
      name,
      oabNumber
    });
    return res.json({ employee });
  },
  async index(req, res) {
    const employees = await Employee.find().sort("-createdAt");
    return res.json(employees);
  },
  async update(req, res) {
    const query = { _id: req.body._id };
    const { name, oabNumber } = req.body;
    const employee = await Employee.updateOne(query, {
      name,
      oabNumber
    }, { omitUndefined: true });
    return res.json({ employee });
  }
  ,
  async delete(req, res) {
    const query = { _id: req.body._id };
    const employee = await Employee.deleteOne(query);
    return res.json({ employee });
  }
};
