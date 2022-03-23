const express = require('express');
const router = express.Router();

const { plantSeedling } = require('../controllers/plantSeedling')


// Handling POST request to /flowBar
router.post('/', plantSeedling)


module.exports = router;