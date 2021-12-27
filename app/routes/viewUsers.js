const express = require('express');
const router = express.Router();


// Handling GET request to /viewNurseries
router.get('/', require('../controllers/viewUsers'))


module.exports = router;