const express = require('express');
const router = express.Router();

const { orderSeedling } = require('../controllers/orderSeedling')


// Handling POST request to /flowBar
router.post('/', orderSeedling)


module.exports = router;