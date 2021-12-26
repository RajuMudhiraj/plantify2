const express = require('express');
const router = express.Router();


// Handling POST request to /addNursery
router.post('/', require('../controllers/addNursery'))


module.exports = router;