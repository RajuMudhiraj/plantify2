const express = require('express');
const router = express.Router();

const { viewPlants } = require('../controllers/viewPlants')


// Handling GET request to /viewNurseries
router.get('/', viewPlants)


module.exports = router;