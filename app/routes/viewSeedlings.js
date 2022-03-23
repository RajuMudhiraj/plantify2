const express = require('express');
const router = express.Router();

const { viewNurseries } = require('../controllers/viewSeedlings')


// Handling GET request to /viewNurseries
router.get('/', viewNurseries)


module.exports = router;