const express = require('express');
const router = express.Router();


// Handling POST request to /flowBar
router.get('/', require('../controllers/viewPlaces'))


module.exports = router;