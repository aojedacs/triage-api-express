"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
  nss: { type: String, required: true },
  name: { type: String, required: true },
  firstLastName: { type: String, required: true },
  secondLastName: { type: String, required: true },
  age: { type: String, required: true },
  dateOfBirth: { type: Date },
  curp: { type: String, required: true },
  bloodType: { type: String, required: true },
  // gender: { type: String, enum: ['male', 'female'] }
});

module.exports = mongoose.model("Patients", PatientSchema);
