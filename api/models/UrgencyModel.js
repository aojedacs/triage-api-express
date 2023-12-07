"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const updatesSchema = new mongoose.Schema({
  id: { type: Number },
  update: { type: String, required: true },
  date: { type: Date, required: true },
});

var UrgencySchema = new Schema({
  id: { type: Number},
  nss: { type: String, required: true },
  observations: { type: String, required: true },
  status: {
    type: String,
    enum: ["espera", "valoracion", "consulta", "hospitalizacion", "alta"],
  },
  triage: {
    type: String,
    enum: ["level1", "level2", "level3", "level4", "level5"],
  },
  updates: [updatesSchema],
});

module.exports = mongoose.model("Urgency", UrgencySchema);
