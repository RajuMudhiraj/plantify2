const express = require('express');
const router = express.Router();

const { markOrdersDelivered } = require('../controllers/markOrdersDelivered')


// Handling POST request to /flowBar
router.post('/', markOrdersDelivered)


module.exports = router;