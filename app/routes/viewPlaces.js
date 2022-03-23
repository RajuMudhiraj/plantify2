const express = require('express');
const router = express.Router();

const { viewPlaces } = require('../controllers/viewPlaces')


// Handling POST request to /flowBar
router.get('/', viewPlaces)


module.exports = router;