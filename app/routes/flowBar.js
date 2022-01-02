const express = require('express');
const router = express.Router();


// Handling POST request to /flowBar
router.get('/', require('../controllers/flowBar'))


module.exports = router;