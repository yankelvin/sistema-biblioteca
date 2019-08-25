const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    oabNumber: String
  }, { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
