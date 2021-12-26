const express = require('express');
const router = express.Router();

router.post('/', require('../controllers/verifyEmailOtp'))

module.exports = router;
