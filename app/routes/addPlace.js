const express = require('express');
const router = express.Router();


// Handling POST request to /flowBar
router.post('/', require('../controllers/addPlace'))


module.exports = router;