"use strict";
const generarNumeroSeguridadSocial = require("../../nssGenerator");
const Patient = require("../models/PatientModel");

exports.listAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    if (!patients) {
      return res.status(400).json({ msg: "No patient found" });
    }
    res.json(patients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getPatientByNss = async (req, res) => {
  try {
    const patient = await Patient.find({}, { nss: 1 });
    //   const patient = await Patient.findByNss(req.params.nss);
    if (!patient) {
      return res.status(400).json({ msg: "Patient not found" });
    }
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
exports.createPatient = async (req, res) => {
  req.body.nss = generarNumeroSeguridadSocial(req.body.curp);
  const newPatient = new Patient(req.body);

  try {
    const patient = await newPatient.save();
    if (!patient) {
      return res.status(400).json({ msg: "Failed to create patient" });
    }
    res.status(201).json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
exports.updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(400).json({ msg: "Patient not found" });
    }
    res.json(updatedPatient);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
exports.deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndRemove(req.params.id);
    if (!deletedPatient) {
      return res.status(400).json({ msg: "Patient not found" });
    }
    res.json(deletedPatient);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
