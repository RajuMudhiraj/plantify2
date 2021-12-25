const express = require('express');
const router = express.Router();

const { User } = require('../models/Associations')

router.post('/', require('../controllers/checkEmailExistence'))

module.exports = router;