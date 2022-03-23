const express = require('express');
const router = express.Router();

const { addNursery } = require('../controllers/addNursery')

// Handling POST request to /addNursery
router.post('/', addNursery)


module.exports = router;