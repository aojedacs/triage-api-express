'use strict'
const express = require('express');
const router = express.Router();
const urgencyController = require('../controllers/UrgencyController');

router.get('/', urgencyController.listAllUrgencies);
router.post('/', urgencyController.createNewUrgency);
router.put('/:id', urgencyController.updateUrgency);
router.delete('/:id', urgencyController.deleteUrgency);
module.exports = router;
