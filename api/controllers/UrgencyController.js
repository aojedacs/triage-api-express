"use strict";

const Urgency = require("../models/UrgencyModel");

exports.listAllUrgencies = async (req, res) => {
  try {
    const urgencies = await Urgency.find();
    if (!urgencies) {
      return res.status(400).json({ msg: "No urgencies found" });
    }
    return res.status(200).json(urgencies);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
};
exports.getUrgencyById = async (req, res) => {
  try {
    const id = req.params.id;
    const urgency = await Urgency.findById(id);
    if (!urgency) {
      return res.status(400).json({ msg: "no urgency with that ID" });
    }
    return res.status(200).json(urgency);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("server error");
  }
};
exports.createNewUrgency = async (req, res) => {
  const newUrgency = new Urgency(req.body);
  try {
    const urgency = await newUrgency.save();
    if (!urgency) {
      return res.status(400).json({ msg: "Error creating the urgency" });
    }
    return res.status(201).json(urgency);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};
exports.updateUrgency = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUrgency = await Urgency.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUrgency) {
      return res
        .status(400)
        .json({ msg: "No urgency with this ID was found to update" });
    }
    return res.status(200).json(updatedUrgency);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};
exports.deleteUrgency = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUrgency = await Urgency.findByIdAndDelete(id);
    if (!deletedUrgency) {
      return res.status(400).json({ msg: "No urgency with this ID was found" });
    }
    return res.status(200).json(deletedUrgency);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};
