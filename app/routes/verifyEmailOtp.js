const express = require('express');
const router = express.Router();

const { verifyEmailOtp } = require('../controllers/verifyEmailOtp')

router.post('/', verifyEmailOtp)

module.exports = router;
