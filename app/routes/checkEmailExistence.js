const express = require('express');
const router = express.Router();


router.post('/', require('../controllers/checkEmailExistence'))

module.exports = router;