const express = require('express');
const router = express.Router();
const { addSeedling } = require('../controllers/addSeedling')

// Handling POST request to /addNursery
router.post('/', addSeedling)


module.exports = router;