const express = require('express');
const router = express.Router();

const { checkEmailExistence } = require('../controllers/checkEmailExistence')


router.post('/', checkEmailExistence)

module.exports = router;