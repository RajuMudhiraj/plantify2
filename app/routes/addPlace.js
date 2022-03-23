const express = require('express');
const router = express.Router();

const { addPlace } = require('../controllers/addPlace')


// Handling POST request to /flowBar
router.post('/', addPlace)


module.exports = router;