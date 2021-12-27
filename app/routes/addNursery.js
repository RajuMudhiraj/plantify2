const express = require('express');
const router = express.Router();
const verifyAuth = require('../middlewares/verifyAuth')


// Handling POST request to /addNursery
router.post('/', require('../controllers/addNursery'))


module.exports = router;