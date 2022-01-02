const express = require('express');
const router = express.Router();


// Handling POST request to /addNursery
router.post('/', require('../controllers/addSeedling'))


module.exports = router;