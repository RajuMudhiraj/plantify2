const express = require('express');
const router = express.Router();

const { viewOrders } = require('../controllers/viewOrders')


// Handling GET request to /viewNurseries
router.get('/', viewOrders)


module.exports = router;