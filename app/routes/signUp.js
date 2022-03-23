const express = require('express');
const router = express.Router();

const { signUp } = require('../controllers/signUp')

// Handling POST request to /signUp
router.post('/', signUp)


module.exports = router;