const express = require('express');
const router = express.Router();


// Handling POST request to /flowBar
router.post('/', require('../controllers/markOrdersDelivered'))


module.exports = router;