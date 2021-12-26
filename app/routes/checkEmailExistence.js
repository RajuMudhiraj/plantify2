const express = require('express');
const router = express.Router();
const { Auth } = require('two-step-auth')

const User = require('../models/User')

router.post('/', require('../controllers/checkEmailExistence'))

module.exports = router;