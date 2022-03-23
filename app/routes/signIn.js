const express = require('express');
const router = express.Router();

const {signIn} = require('../controllers/signIn')
// Signing in 
router.post('/', signIn)

module.exports = router;