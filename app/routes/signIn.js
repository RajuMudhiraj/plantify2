const express = require('express');
const router = express.Router();

// Signing in 
router.post('/', require('../controllers/signIn'))

module.exports = router;