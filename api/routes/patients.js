'use strict'
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/PatientController');

router.get('/', patientController.listAllPatients);
router.post('/', patientController.createPatient);
router.put('/:nss', patientController.updatePatient);
router.delete('/:nss', patientController.deletePatient);
router.get('/:nss', patientController.getPatientByNss);
module.exports = router;
