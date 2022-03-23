const express = require('express');
const router = express.Router();

const { viewUsers } = require('../controllers/viewUsers')


// Handling GET request to /viewNurseries
router.get('/', viewUsers)


module.exports = router;