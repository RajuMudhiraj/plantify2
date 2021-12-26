const express = require('express');
const router = express.Router();

// Handling POST request to /signUp
router.post('/', require('../controllers/signUp'))


module.exports = router;